import { Component, inject } from '@angular/core';
import { SigninService } from '../../services/signin/signin.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private signinService: SigninService,
    private router: Router
  ) {
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
