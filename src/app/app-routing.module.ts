import { PatiententryComponent } from './patient/patiententry/patiententry.component';
import { AdmingardGuard } from './guard/admin/admin/admingard.guard';
import { AdminloginportalComponent } from './adminloginportal/adminloginportal.component';
import { FetchlistComponent } from './admin/fetchlist/fetchlist.component';
import { ContactlistComponent } from './admin/contactlist/contactlist.component';
import { EnquirylistComponent } from './admin/enquirylist/enquirylist.component';

import { AboutdeveloperComponent } from './aboutdeveloper/aboutdeveloper.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

import { AboutusComponent } from './aboutus/aboutus.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //home
  { path: 'Home', component: HomeComponent },

  //aboutus
  { path: 'aboutus', component: AboutusComponent },
  //contactus
  { path: 'contactus', component: ContactusComponent },
  //aboutdev
  { path: 'aboutdeveloper', component: AboutdeveloperComponent },
  //Adminlogin
   {path:'adminlist',component:FetchlistComponent,canActivate:[AdmingardGuard]},
   {path:'adminloginportal',component:AdminloginportalComponent},
   {path:'patientdetail',component:PatiententryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule],
  providers:[AdmingardGuard]
})
export class AppRoutingModule {}
