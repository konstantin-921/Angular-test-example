import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usersUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message);
  };

  private setHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `bearer ${localStorage.getItem('userToken')}`}),
    };
    return httpOptions;
  }

  public getUser (): Observable<User> {
    const url = `${this.usersUrl}/currentUser`;
    const httpOptions = this.setHttpOptions();
    return this.http.get<User>(url, httpOptions).pipe(
      map(user => {
        return user;
      }),
      catchError(this.handleError),
    );
  }

  public updateLanguage (lang): Observable<User> {
    const url = `${this.usersUrl}/currentUser`;
    const httpOptions = this.setHttpOptions();
    const data = {
      lang
    };
    return this.http.patch<User>(url, data, httpOptions).pipe(
      map(user => {
        return user;
      }),
      catchError(this.handleError),
    );
  }

}
