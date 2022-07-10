import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {User} from './user'

@Injectable({ providedIn: 'root'})

export class UserService {

  private userUrl = 'http://localhost:8080/usuarios';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
     private http: HttpClient){ }


    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.userUrl)
        .pipe(
          tap(_ => this.log('fetched users')),
          catchError(this.handleError<User[]>('getUsers', []))
        );
    }

    addUser(user: User): Observable<User> {
      return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
        tap((newUser: User) => this.log(`added hero w/ id=${newUser.id}`)),
        catchError(this.handleError<User>('addHero'))
      );
    }

     /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

   /** Log a CadastroService message with the MessageService */
  private log(message: string) {
    console.log("erro: "+message);
  }
}
