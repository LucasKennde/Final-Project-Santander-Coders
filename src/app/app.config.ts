import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http'; // Adicione 'withFetch'
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideIcons } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';
import { httpInterceptor } from './http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      timeOut: 3000,
      progressBar: true,
    }),
    provideIcons({ heroEye, heroEyeSlash }),
  ],
};
