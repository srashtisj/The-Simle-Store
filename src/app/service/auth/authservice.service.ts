import { Auth } from './../../interface/auth/auth';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  user:Auth;
  authchange=new Subject<boolean>();

  constructor() { }

  login(authdata:Auth){

  }

}
