import { Enquiry } from './../../interface/enquiry/enquiry';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EnquriyService {
  constructor(private db: AngularFirestore) {}

  enquirydata=new Subject<Enquiry[]>();

  Addenquiry(enquiry:Enquiry){
    this.db.collection('enquiry').add(enquiry).then((re)=>{
      console.log('success');

    }).catch((error)=>{
      console.log(error.message);

    });
  }
  getenquiry(){
   this.db
     .collection('enquiry')
     .valueChanges()
     .subscribe((re: Enquiry[]) => {
       this.enquirydata.next(re);
     });
  }
}
