import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css']
})
export class AssignRoleComponent implements OnInit {
  userId: string = '';
  roleRequestedUserData: any;
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

  constructor (
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.userId = params["id"];
        this.roleRequestedUserData = history.state.roleRequestedUserData;
      }
    )
    console.log(this.userId);
    console.log(this.roleRequestedUserData);    
  }

  renderRole(role: string): any {
    return this.roleNameMap.get(role);
  }

  updateRoles(): void {
    const assignedRoles:string[] = Object.keys(this.roles).filter(role => this.roles[role]);
    const data: any = {
      username: this.roleRequestedUserData['username'],
      roles: assignedRoles
    }
    this.userService.updateRoles(this.roleRequestedUserData['id'], data).subscribe({
      next: res => {
        console.log("Roles were updated!");
        this.router.navigate(
          ["admin-dashboard"]
        );
      },
      error: e => console.log("Error while updating: ", e)
    });
  }
}
