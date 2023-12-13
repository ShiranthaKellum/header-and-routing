import { Component } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(
    private userService: UserService
  ) {}

  roleRequestedUserList: any[] = [];
  roles: { [key: string]: boolean } = {
    "admin": false,
    "doctor": false,
    "contributor": false
  }
  roleNameMap: Map<string, string> = new Map([
    ["admin", "Admin"],
    ["doctor", "Doctor"],
    ["contributor", "Contributor"]
  ]);

  ngOnInit (): void {
    this.loadData();
  }
  
  loadData(): void {
    this.userService.getRoleRequestedUsers().subscribe(
      data => {
        this.roleRequestedUserList = data;
      }
    );
  }
  
  renderRole(role: string): any {
    return this.roleNameMap.get(role);
  }
}
