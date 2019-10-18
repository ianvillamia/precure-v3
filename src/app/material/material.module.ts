import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule

} from '@angular/material';


const  MaterialComponents = [
  MatButtonModule,MatFormFieldModule,  MatInputModule,MatSidenavModule,FormsModule];
@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
