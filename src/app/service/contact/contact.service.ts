import { Contact } from './../../interface/contact/contact';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db:AngularFirestore) { }

  addcontact(con:Contact)
  {
    this.db.collection('conatct').add(con).then((re)=>{
      console.log("success");

    }).catch((error)=>{
      console.log(error.message);

    });
  }
}
