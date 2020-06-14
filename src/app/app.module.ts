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
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './imgslider/gallery/gallery.component';
import { MobGalleryComponent } from './imgslider/mob-gallery/mob-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { AboutdeveloperComponent } from './aboutdeveloper/aboutdeveloper.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    MobGalleryComponent,
    FooterComponent,
    AboutdeveloperComponent,
  ],
  imports: [
    SharedmoduleModule,
    TreatementModule,
    MaterialmoduleModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgImageSliderModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
