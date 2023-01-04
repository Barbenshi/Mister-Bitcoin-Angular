import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegmentGroup, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService:UserService,
              private router:Router) {}
              isLoggedIn!:boolean
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.userService.checkLoggedInUser()
      .subscribe(isLoggedIn=>{
        if(!isLoggedIn) this.router.navigateByUrl('/sign-up')
        this.isLoggedIn = isLoggedIn
      })
      return this.isLoggedIn
  }
  
}
