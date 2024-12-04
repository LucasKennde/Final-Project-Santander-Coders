import { Component } from '@angular/core';
import { PerfilComponent } from "../../componentes/perfil/perfil.component";
import { HomeGameComponent } from "../../componentes/home-game/home-game.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PerfilComponent, HomeGameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
