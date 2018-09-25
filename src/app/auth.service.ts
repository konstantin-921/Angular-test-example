import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usersUrl = 'http://localhost:3000/api/auth'; // URL to web api

  constructor(private http: HttpClient) {}

  login(email, password): Observable<User> {
    const url = `${this.usersUrl}/signIn?email=${email}&password=${password}`;
    return this.http.get<User>(url).pipe(
      map(user => {
        if (user && user.token) {
          localStorage.setItem('userToken', user.token);
        }
        return user;
      })
    );
  }

  registrate(data) {
    const url = `${this.usersUrl}/signUp`;
    return this.http.post<User>(url, data, httpOptions);
  }
}
