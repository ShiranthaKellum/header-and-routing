import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(
    private userService: UserService,
    private router: Router
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
  roleRequestedUserData: any;

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

  navigateToAssignRoles(user: { [key: string]: any }): void {
    console.log(user['id']);
    const userId = user['id'];
    const dataToAssignRoles: NavigationExtras = {
      state: {
        roleRequestedUserData: user
      }
    }
    this.router.navigate([
      "assign-roles",
      userId
    ],
    dataToAssignRoles
    );
  }
}
