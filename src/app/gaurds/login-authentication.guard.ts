import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationGuard implements CanActivate {

  loginFlag:string = "false";

  constructor(private router: Router) { }
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('isUserLoggedIn') === "true") {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
