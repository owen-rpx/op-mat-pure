import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // localStorage
  isLoggedIn = false;
  constructor() {
    const isLogin: string = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = Boolean(isLogin);
  }


  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        localStorage.setItem('isLoggedIn', 'true');
        this.isLoggedIn = true;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
