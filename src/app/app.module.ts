import { MaterialmoduleModule } from './module/materialmodule/materialmodule.module';
import { SharedmoduleModule } from './module/sharedmodule/sharedmodule/sharedmodule.module';
import { TreatementModule } from './module/treatment/treatement/treatement.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [AppComponent, AboutusComponent, ],
  imports: [SharedmoduleModule, TreatementModule,MaterialmoduleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
