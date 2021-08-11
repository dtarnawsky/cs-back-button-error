import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterBackButtonService } from './registerbackbutton.service';

@Injectable({
  providedIn: 'root'
})
export class AndroidBackButtonGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return this.registerBackButton.canGoToConfirmationPage;
      if (!this.registerBackButton.canGoToConfirmationPage) {
        return false;
      } else {
        return true;
      }
  } 
  constructor(
    private registerBackButton: RegisterBackButtonService) {}
  
}
