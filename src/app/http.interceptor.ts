import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
  });

  return next(modifiedReq).pipe(
    retry({ count: 2, delay: 1000 }), // Tenta a requisição 2 vezes e espera 1 segundo (1000ms) entre as tentativas
    catchError((err: HttpErrorResponse) => {
      console.log('Erro:', err.message); // Loga o erro
      return throwError(() => err);
    })
  );
};
