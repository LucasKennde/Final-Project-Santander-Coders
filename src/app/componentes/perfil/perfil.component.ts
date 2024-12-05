import { Component, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  userService: UsersService = inject(UsersService);
  user:any = signal<getUser>({ id: '', username: '' , image:'' })

  ngOnInit() {
    const idUser = this.getIdUser();
    if (!idUser) {
       return; 
    }
  
    this.userService.getUserById(idUser).subscribe({
      next: (res) => {
        this.user.set(res);
        console.log(this.user());
      },
      error: (err) => {
        console.error('Failed to fetch user:', err);
      }
    });
  }

  // getImage(){
    
  //   return "http://localhost:3000/"+this.user().image
  // }
  getIdUser() {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (!token) return null;  
      const decoded = this.decodeJwt(token);
      return decoded.sub;
    }
    return null; 
  }
  
  decodeJwt(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      console.error('Failed to decode JWT:', error);
      return null;  
    }
  }
  


}

interface getUser{
  id: string,
  username: string,
  image: string
}