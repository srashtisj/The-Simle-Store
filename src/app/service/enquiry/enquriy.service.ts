import { Enquiry } from './../../interface/enquiry/enquiry';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EnquriyService {
  constructor(private db: AngularFirestore) {}


  Addenquiry(enquiry:Enquiry){
    this.db.collection('enquiry').add(enquiry).then((re)=>{
      console.log('success');

    }).catch((error)=>{
      console.log(error.message);

    });
  }
  getenquiry(){
    return this.db.collection(`enquiry`).snapshotChanges().pipe(map((action)=>{
      return action.map(re=>{
        const data=re.payload.doc.data() as Enquiry
        const id=re.payload.doc.id;
        return {id,...data}
      })
    }))
  }
}
