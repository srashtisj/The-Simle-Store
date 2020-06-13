import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import{FormsModule} from "@angular/forms"
@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, FlexLayoutModule, MatCardModule,MatDialogModule,FormsModule,MatInputModule],
  exports: [MatButtonModule, FlexLayoutModule, MatCardModule,MatDialogModule,FormsModule,MatInputModule],
})
export class MaterialmoduleModule {}
