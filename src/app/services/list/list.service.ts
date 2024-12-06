import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private http = inject(HttpClient);
  constructor() {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://api-coders.onrender.com/users');
  }
}

export interface IUser {
  id: string;
  username: string;
  image: string;
  score: number;
}
