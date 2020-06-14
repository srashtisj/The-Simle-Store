import { ContactService } from './service/contact/contact.service';
import { MaterialmoduleModule } from './module/materialmodule/materialmodule.module';
import { SharedmoduleModule } from './module/sharedmodule/sharedmodule/sharedmodule.module';
import { TreatementModule } from './module/treatment/treatement/treatement.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ContactusComponent } from './contactus/contactus.component';
import { SidenavComponent } from './toolbar/sidenav/sidenav.component';
import { HeaderComponent } from './toolbar/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [
    SharedmoduleModule,
    TreatementModule,
    MaterialmoduleModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
