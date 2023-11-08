import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storageSerice/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'header-and-routing';

  user: any;
  roleArray: any[] = [];
  isAdmin: boolean = false;
  isDoctor: boolean = false;
  isUser: boolean = false;

  constructor(private storageService: StorageService) {}
  
  ngOnInit(): void {
    this.roleArray = this.storageService.getUser() != null? this.storageService.getUser().roles: [];
    this.isAdmin = this.roleArray.includes("ROLE_ADMIN")? true: false;
    this.isDoctor = this.roleArray.includes("ROLE_DOCTOR")? true: false;
    this.isUser = this.roleArray.includes("ROLE_USER")? true: false;
  }
}
