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
  userService = inject(UsersService)
  user:any = signal<getUser>({ id: '', username: '' , image:'' })



  ngOnInit(){
    const idUser = this.getIdUser()
   this.userService.getUserById(idUser).subscribe(res =>{
    this.user.set(res)
    console.log(this.user());
    
   })
    
  }

  getIdUser(){
    const token = localStorage.getItem('accessToken');
    if(!token) return
      const decoded = this.decodeJwt(token);
      return decoded.sub
  }
  decodeJwt(token: string): any {
    const payload = token.split('.')[1]; 
    return JSON.parse(atob(payload)); 
  }


}

interface getUser{
  id: string,
  username: string,
  image: string
}