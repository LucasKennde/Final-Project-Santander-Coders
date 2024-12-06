import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private HTTP = inject(HttpClient);
  constructor() {}

  getUserById(id: string) {
    return this.HTTP.get('https://api-coders.onrender.com/users/' + id);
  }

  isLogged() {
    return localStorage.getItem('accessToken') !== null;
  }
}