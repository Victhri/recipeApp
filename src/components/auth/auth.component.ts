import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponceData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    constructor(private authService: AuthService, private router: Router) {}

    isLoginMode = true;
    isLoading = false;
    error: string | null = null;

    onSwitchMode() {
      this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form: NgForm) {
      if(!form.valid) {
        return
      };

      const email = form.value.email;
      const pass = form.value.pass
      let authObservable: Observable<AuthResponceData>;

      this.isLoading = true;

      if(this.isLoginMode) {
        authObservable = this.authService.login(email, pass)
      } else {
        authObservable = this.authService.signup(email, pass)
      }
      authObservable.subscribe({
        next: responseData => {
          console.log(responseData);
          this.isLoading = false;
          this.router.navigate(['/recipes'])
        },
        error: errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        }
      })
      
      form.reset()
    }
    onHandleError() {
      this.error = null;
    }
}