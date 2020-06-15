import { Subject } from 'rxjs';
import { Contact } from './../../interface/contact/contact';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db:AngularFirestore) { }
  contactlist=new Subject<Contact[]>();

  addcontact(con:Contact)
  {
    this.db.collection('contact').add(con).then((re)=>{
      console.log("success");

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
