import { Component, inject } from '@angular/core';
import { IUser, ListService } from '../../services/list/list.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-players',
  standalone: true,
  imports: [],
  templateUrl: './list-players.component.html',
  styleUrl: './list-players.component.css',
})
export class ListPlayersComponent {
  listService = inject(ListService);
  toastr = inject(ToastrService);
  listUsers: IUser[] = [];
  usersSubscription!: Subscription;

  ngOnInit() {
    this.usersSubscription = this.listService.getUsers().subscribe({
      next: (response) => {
        this.listUsers = response;
      },
      error: (err) => {
        this.toastr.error('Erro ao carregar lista de usuários');
      },
    });
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
