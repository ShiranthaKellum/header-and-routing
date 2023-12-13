import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';
import { PageUtilService } from 'src/app/services/pageUtilService/page-util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
  };
  roles: { [key: string]: boolean } = {
    "admin": false,
    'doctor': false,
    "contributor": false
  };
  isSuccessful: boolean = false;
  errorMessage: string = '';
  isRegistrationFailed: boolean = false;

  constructor(
    private authService: AuthService,
    private pageUtilService: PageUtilService  
  ) {}

  onSubmit(): void {
    const { username, email,  password } = this.form;
    const requestedRoles = Object.keys(this.roles).filter(role => this.roles[role]);
    
    this.authService.register(username, email, password, requestedRoles).subscribe({
      next: () => {
        this.isSuccessful = true;
      },
      error: e => {
        this.errorMessage = e.error.message;
        this.isSuccessful = false;
        this.isRegistrationFailed = true;
      }
    });
  }

  reloadPage (): void {
    this.pageUtilService.reloadPage();
  }
}
