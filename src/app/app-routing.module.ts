import { ToothColouredFillingComponent } from './treatment/tooth-coloured-filling/tooth-coloured-filling.component';
import { SmileDesigningComponent } from './treatment/smile-designing/smile-designing.component';
import { PorcelainLaminateVeneersComponent } from './treatment/porcelain-laminate-veneers/porcelain-laminate-veneers.component';
import { InvisalignComponent } from './treatment/invisalign/invisalign.component';
import { FullMouthRehabilitationComponent } from './treatment/full-mouth-rehabilitation/full-mouth-rehabilitation.component';
import { CosmeticDentistryComponent } from './treatment/cosmetic-dentistry/cosmetic-dentistry.component';
import { DentalImplantsComponent } from './treatment/dental-implants/dental-implants.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //Treatment
  //Dental Implants
  { path: 'DentalImplants', component: DentalImplantsComponent },
  { path: 'CosmeticDentistry', component: CosmeticDentistryComponent },
  { path: 'FullMouthRehabilitation',component:FullMouthRehabilitationComponent},
  {path:'Invisalign',component:InvisalignComponent},
  {path:'PorcelainLaminateVeneers',component:PorcelainLaminateVeneersComponent },
  {path:'SmileDesigning',component:SmileDesigningComponent},
  {path:'ToothColouredFilling',component:ToothColouredFillingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
