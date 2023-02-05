import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { LoginSuccessful, SingleUserResponse } from 'src/app/models/reqres.interfaces';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { setAuthenticateUser, unsetAuthenticatedUser } from '../store/auth.actions';
import { AppState } from 'src/app/core/models/app-state.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://reqres.in/api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) { }

  login(data: {email:string; password: string}): Observable<any>{
    return this.httpClient
    .post<LoginSuccessful>(`${this.apiUrl}/login`, data)
    .pipe(
      tap((data) => localStorage.setItem('token', data.token)), // tap is like a wilcard function
      mergeMap(() =>
        this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/9`)
      ),
      map(
        ({data})=> 
        new User(
          data.id,
          data.email,
          data.first_name,
          data.last_name,
          data.avatar
        )
      ),
      /* tap((user) => this.sessionService.setUser(user)) */
      tap((user) => this.store.dispatch(
        setAuthenticateUser({
          authenticatedUser: user
        })))
    );
  }

  logOut() {
    localStorage.removeItem('token');
    /* this.sessionService.setUser(null); */
    this.store.dispatch(unsetAuthenticatedUser());
    this.router.navigate(['/auth/login']);
  }

  verifyToken(): Observable<boolean>{
    const lsToken = localStorage.getItem('token');
    return of (lsToken)
    .pipe(
      tap(
        (token) => {
          if (!token) throw new Error('Invalid token')
        }),
        mergeMap(() => this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/9`)
        ),
        tap(
          ({data}) => 
          this.store.dispatch(
            setAuthenticateUser({
              authenticatedUser: new User(
                data.id,
                data.email,
                data.first_name,
                data.last_name,
                data.avatar
              )
            })
          )
        
        ),
        map ((user) => !!user),
        catchError(() => of(false))
          
        )
    
     
   
  }
  
}
