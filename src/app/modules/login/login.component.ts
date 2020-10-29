import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm = new FormControl('');
  name = new FormControl('');
  pwd = new FormControl('');

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.auth.login().subscribe(() => {
      if (this.auth.isLoggedIn) {
        console.log('login...');
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/home';

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }
}
