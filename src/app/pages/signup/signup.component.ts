import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
