import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 
import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${localStorage.getItem('userToken')}`}),
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usersUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message);
  };

  public getUser (): Observable<User> {
    const url = `${this.usersUrl}/currentUser`;
    return this.http.get<User>(url, httpOptions).pipe(
      map(user => {
        console.log(user);
        return user;
      }),
      catchError(this.handleError),
    );
  }

}
