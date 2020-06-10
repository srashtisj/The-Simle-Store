import { MaterialmoduleModule } from './module/materialmodule/materialmodule.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DentalImplantsComponent } from './treatment/dental-implants/dental-implants.component';
import { EnquirybuttonComponent } from './Enquiry/enquirybutton/enquirybutton.component';

@NgModule({
  declarations: [
    AppComponent,
    DentalImplantsComponent,
    EnquirybuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
