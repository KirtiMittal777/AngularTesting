import { Injectable, ɵConsole } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginMockService {

  constructor() { }

  onSubmit(login: { name, password }): Observable<boolean> {

    if (login.name == 'setError') {
      return throwError('User not registered').pipe(delay(1000));
    } else if (login.name == 'setFailure') {
      return of(false).pipe(delay(1000));
    } else {
      return of(true).pipe(delay(1000));
    }
  }
}
