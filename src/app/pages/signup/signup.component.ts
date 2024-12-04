import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../componentes/footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../../services/signup/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FooterComponent, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm!: FormGroup
  private toastr = inject(ToastrService);
  private signupService = inject(SignupService)
  private router = inject(Router)
  ngOnInit() {
    this.signupForm = new FormGroup({
      user: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confPassword: new FormControl('', Validators.required)
    });
  }
  onSubmit() {

    if (!this.signupForm.valid) {
      this.toastr.error('Preencha todos os campos!', 'Erro');

    } else {
      if (this.signupForm.get('password')?.value !== this.signupForm.get('confPassword')?.value) {
        this.toastr.error('As senhas não conferem!', 'Erro');
        return;
      }
      const newUser = {
        name: this.signupForm.get('name')?.value,
        username: this.signupForm.get('user')?.value,
        password: this.signupForm.get('password')?.value
      }
      this.signupService.signup(newUser).subscribe((response) => {
        this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
        this.router.navigate(['/signin']);
      }, (error) => {
        this.toastr.error('Erro ao realizar cadastro!', 'Erro');
      });
    }
  }
}
