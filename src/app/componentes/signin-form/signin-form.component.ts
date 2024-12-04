import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SigninService } from '../../services/signin/signin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.css',
})
export class SigninFormComponent {
  @Input() isLoading: boolean = false;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private signinService = inject(SigninService);
  private toastr = inject(ToastrService);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.signinService.signin(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login bem-sucedido:', response);
          localStorage.setItem('accessToken', response.accessToken);
          this.toastr.success('Login bem-sucedido!', 'Sucesso');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro no login:', err);
          this.toastr.error('Usuário ou senha inválidos.', 'Erro');
        },
      });
    } else {
      this.toastr.warning('Por favor, preencha todos os campos.', 'Aviso');
    }
  }
}
