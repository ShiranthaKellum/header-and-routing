import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../storageSerice/storage.service';
import { AuthService } from '../authService/auth.service';

const baseUrl = 'http://localhost:8080/patient/create';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(
    private http: HttpClient, 
    private storageService: StorageService,
    private authService: AuthService
  ) {}
  accessToken: string = '';
  create(data: any): Observable<any> {
    this.accessToken = this.storageService.getItem('ACCESS_TOKEN');
    return this.http.post(
      baseUrl, 
      data, 
      {
        headers: this.authService.createAuthorizationHeader()
      }
    );
  }
}
