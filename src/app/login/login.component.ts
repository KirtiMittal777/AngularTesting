import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { LoginResponse } from './model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showSpinner: boolean;
  response: LoginResponse;
  error: string;

  constructor(private fb: FormBuilder, private loginService: LoginService, public router: Router) { }

  ngOnInit() {
    this.showSpinner = false;
    this.error = '';

    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {

    this.showSpinner = true;

    this.loginService.onSubmit(this.loginForm.value).subscribe(
      (result) => {

        this.showSpinner = false;

        if (result) {
          this.router.navigate(['/dashboard-component']);
        } else {
          this.error = 'User not found, please try again';
        }
      },
      (error) => {
        this.error = error;
        this.showSpinner = false;
      });
  }

}
