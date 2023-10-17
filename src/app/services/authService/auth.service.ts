import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = "";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  register(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '',
      {
        username,
        password
      },
      httpOptions
    );
  }
}
