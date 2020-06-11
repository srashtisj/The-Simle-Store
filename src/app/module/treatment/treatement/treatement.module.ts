import { ToothColouredFillingComponent } from './../../../treatment/tooth-coloured-filling/tooth-coloured-filling.component';
import { SmileDesigningComponent } from './../../../treatment/smile-designing/smile-designing.component';
import { PorcelainLaminateVeneersComponent } from './../../../treatment/porcelain-laminate-veneers/porcelain-laminate-veneers.component';
import { InvisalignComponent } from './../../../treatment/invisalign/invisalign.component';
import { FullMouthRehabilitationComponent } from './../../../treatment/full-mouth-rehabilitation/full-mouth-rehabilitation.component';
import { CosmeticDentistryComponent } from './../../../treatment/cosmetic-dentistry/cosmetic-dentistry.component';
import { SharedmoduleModule } from './../../sharedmodule/sharedmodule/sharedmodule.module';
import { EnquirybuttonComponent } from './../../../Enquiry/enquirybutton/enquirybutton.component';
import { DentalImplantsComponent } from './../../../treatment/dental-implants/dental-implants.component';

import { MaterialmoduleModule } from './../../materialmodule/materialmodule.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DentalImplantsComponent,
    EnquirybuttonComponent,
    CosmeticDentistryComponent,
    FullMouthRehabilitationComponent,
    PorcelainLaminateVeneersComponent,
    InvisalignComponent,
    SmileDesigningComponent,
    ToothColouredFillingComponent,
  ],
  imports: [CommonModule, SharedmoduleModule, MaterialmoduleModule],
})
export class TreatementModule {}
