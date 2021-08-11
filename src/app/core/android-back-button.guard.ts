import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterBackButtonService } from './registerbackbutton.service';

@Injectable({
  providedIn: 'root'
})
export class AndroidBackButtonGuard implements CanActivate {
  canActivate(): boolean {

    let allowed = true;
    if (!this.registerBackButton.canGoToConfirmationPage) {
      allowed = false;
    }
    console.log('canActivate=' + allowed + ' ' + this.router.url);
    return allowed;
  }
  constructor(private registerBackButton: RegisterBackButtonService, private router: Router) { }

}
