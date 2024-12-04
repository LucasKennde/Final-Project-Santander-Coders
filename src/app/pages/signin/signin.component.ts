import { Component } from '@angular/core';
import { SigninFormComponent } from '../../componentes/signin-form/signin-form.component';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [SigninFormComponent,  FooterComponent],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor() {}
}
