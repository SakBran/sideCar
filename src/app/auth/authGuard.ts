import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthComponent } from './auth.component';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthComponent, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }
}