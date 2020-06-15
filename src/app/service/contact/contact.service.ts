import { Router } from '@angular/router';
import { SncakbarService } from './../snackbar/sncakbar.service';
import { Subject } from 'rxjs';
import { Contact } from './../../interface/contact/contact';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db:AngularFirestore, private snack:SncakbarService,private router:Router) { }
  contactlist=new Subject<Contact[]>();

  addcontact(con:Contact)
  {
    this.db.collection('contact').add(con).then((re)=>{
      console.log("success");
      this.snack.getsnackbar("Contact Details Submitted We Will Get Back To You Soon ! ",null,4000);
      this.router.navigate(['/Home']);

    }).catch((error)=>{
      console.log(error.message);

    });
  }
  getcotact(){
    this.db.collection(`contact`).valueChanges().subscribe((re:Contact[])=>{
        this.contactlist.next(re);
    });
  }
}
