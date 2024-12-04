import { Component } from '@angular/core';
import { SigninFormComponent } from '../../componentes/signin-form/signin-form.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [SigninFormComponent],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor() {}
}
