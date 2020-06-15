import { SncakbarService } from './../snackbar/sncakbar.service';
import { Enquiry } from './../../interface/enquiry/enquiry';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class EnquriyService {
  constructor(private db: AngularFirestore,private snack:SncakbarService) {}

  Addenquiry(enquiry: Enquiry) {
    this.db
      .collection('enquiry')
      .add(enquiry)
      .then((re) => {
        console.log('success');
        this.snack.getsnackbar('Enquiry Submitted We Will Get Back To Your Soon',null,4000)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
