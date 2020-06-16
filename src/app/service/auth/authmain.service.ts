import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Authdata } from './../../interface/admin/authdata/authdata';
import { User } from './../../interface/admin/user/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthmainService {
  constructor(private router: Router, private afauth: AngularFireAuth) {}
  authchanged = new Subject<boolean>();
  private user: User;
  private isAuthenticaed = false;
  login(authdata: Authdata) {
    this.afauth
      .signInWithEmailAndPassword(authdata.email, authdata.password)
      .then((re) => {

        console.log(re);
        this.isAuthenticaed=true
        this.authchanged.next(true);
        this.router.navigate(['/adminlist']);
      })
      .catch((error) => {
        console.log(error.message)
        this.router.navigate(['/Home']);
      });
  }
  logout() {
    this.afauth.signOut();
    this.isAuthenticaed=false
    this.authchanged.next(false);
    this.router.navigate(['/Home']);

  }

  isAuth() {
    return this.isAuthenticaed;
  }
}
