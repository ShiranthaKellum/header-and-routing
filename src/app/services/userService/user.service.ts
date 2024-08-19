import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getRoleRequestedUsers(): Observable<any> {
    return this.http.get(
      baseUrl + '/role-requested-users',
      {
        headers: this.authService.createAuthorizationHeader()
      }
    );
  }

  updateRoles(userId: string, data: any): Observable<any> {
    return this.http.put(
      baseUrl + "/user/" + userId + "/update-roles",
      data,
      {
        headers: this.authService.createAuthorizationHeader()
      }
    );
  } 
}
