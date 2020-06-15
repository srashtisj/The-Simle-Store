import { Enquiry } from './../../interface/enquiry/enquiry';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class EnquriyService {
  constructor(private db: AngularFirestore) {}

  Addenquiry(enquiry: Enquiry) {
    this.db
      .collection('enquiry')
      .add(enquiry)
      .then((re) => {
        console.log('success');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
