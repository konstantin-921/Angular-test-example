import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, flatMap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usersUrl = 'http://localhost:3000/api/auth'; // URL to web api
  public language: string;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message);
  };

  public login(email: string, password: string): Observable<User> {
    const url = `${this.usersUrl}/signIn?email=${email}&password=${password}`;
    return this.http.get<User>(url).pipe(
      map(user => {
        if (user && user.token) {
          this.language = user.language;
          localStorage.setItem('userToken', user.token);
        }
        return user;
      }),
      catchError(this.handleError),
    );
  }

  public registrate(data): Observable<User> {
    const url = `${this.usersUrl}/signUp`;
    return this.http.post<User>(url, data, httpOptions).pipe(
      tap(user => console.log(user.message)),
      map(user => {
        if (user && user.token) {
          localStorage.setItem('userToken', user.token);
        }
        return user;
      }),
      catchError(this.handleError),
    )
  }

}
