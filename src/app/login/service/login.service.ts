import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  onSubmit(login: { name, password }) {

    const loginObservable = new Observable(observer => {

      if (login.name === 'setError') {
        setTimeout(() => {
          observer.error({ status: 'failure', message: 'Invalid Credentials, please try again !!' });
        }, 1000);
      } else {
        setTimeout(() => {
          observer.next({ status: 'success', message: 'Authentication Successful' });
        }, 1000);
      }
    });

    return loginObservable;
  }

}
