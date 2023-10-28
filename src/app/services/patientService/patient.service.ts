import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../storageSerice/storage.service';
import { AuthService } from '../authService/auth.service';

const baseUrl = 'http://localhost:8080/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(
    private http: HttpClient, 
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  create(data: any): Observable<any> {
    return this.http.post(
      baseUrl + "/create", 
      data, 
      {
        headers: this.authService.createAuthorizationHeader()
      }
    );
  }

  getAllPatients(): Observable<any> {
    return this.http.get(
      baseUrl + "/get-all-patients",
      {
        headers: this.authService.createAuthorizationHeader()
      }
    );
  }
}
