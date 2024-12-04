import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private HTTP = inject(HttpClient);

  constructor() { }

  public signup(userData: any) {
    return this.HTTP.post('http://localhost:3000/auth/sign-up', userData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    )
  }
}
