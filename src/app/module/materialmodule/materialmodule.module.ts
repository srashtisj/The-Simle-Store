import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, FlexLayoutModule, MatCardModule],
  exports: [MatButtonModule, FlexLayoutModule, MatCardModule],
})
export class MaterialmoduleModule {}
