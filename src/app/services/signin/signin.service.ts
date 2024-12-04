import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private http = inject(HttpClient);
  constructor() {}

  public signin(userData: IUserData) {
    console.log(userData);

    return this.http.post<SignInResponse>(
      'http://localhost:3000/auth/sign-in',
      userData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}

export interface IUserData {
  username: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  user: {
    id: number;
    name: string;
    username: string;
    image: string;
  };
}
