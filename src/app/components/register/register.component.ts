import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null
  }
  isSuccessful: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    const { username, email,  password } = this.form;
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
      },
      error: e => {
        this.errorMessage = e.error.message;
        this.isSuccessful = false;
      }
    });
  }
}
