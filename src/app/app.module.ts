import { SharedmoduleModule } from './module/sharedmodule/sharedmodule/sharedmodule.module';
import { TreatementModule } from './module/treatment/treatement/treatement.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [AppComponent,  ],
  imports: [SharedmoduleModule, TreatementModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
