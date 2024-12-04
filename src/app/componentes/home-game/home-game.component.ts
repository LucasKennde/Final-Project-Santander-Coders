import { Component } from '@angular/core';
import { ListPlayersComponent } from '../list-players/list-players.component';

@Component({
  selector: 'app-home-game',
  standalone: true,
  imports: [ListPlayersComponent],
  templateUrl: './home-game.component.html',
  styleUrl: './home-game.component.css',
})
export class HomeGameComponent {}
