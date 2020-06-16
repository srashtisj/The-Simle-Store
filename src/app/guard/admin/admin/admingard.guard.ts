import { Injectable } from '@angular/core';
import{Router}from '@angular/router'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthmainService } from 'src/app/service/auth/authmain.service';

@Injectable({
  providedIn: 'root',
})
export class AdmingardGuard implements CanActivate {
  constructor(private auth:AuthmainService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if(this.auth.isAuth()){
      return true;
    }
    else{
      this.router.navigate(['/Home'])

    }
  }
}
