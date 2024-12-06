import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UsersService)

  if(!userService.isLogged()){
    router.navigate(['/signin']);
    return false
  }
  return true;
};
