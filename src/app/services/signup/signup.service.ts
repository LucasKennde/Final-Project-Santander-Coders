import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private HTTP = inject(HttpClient);

  constructor() {}

  public signup(userData: any) {
    return this.HTTP.post('https://api-coders.onrender.com/auth/sign-up', userData);
  }
}
