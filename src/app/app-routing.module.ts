import { DentalImplantsComponent } from './treatment/dental-implants/dental-implants.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //Treatment
  //Dental Implants
  { path: 'DentalImplants',component:DentalImplantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
