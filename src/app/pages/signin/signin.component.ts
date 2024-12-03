import { Component } from '@angular/core';
import { InputComponent } from '../../componentes/input/input.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {}
