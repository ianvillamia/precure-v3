import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { 
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatDatepickerModule

} from '@angular/material';


const  MaterialComponents = [
  MatButtonModule,MatFormFieldModule,  MatInputModule,MatSidenavModule,FormsModule, MatDatepickerModule];
@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
