import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';


const  MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  FormsModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatCardModule,
  MatProgressBarModule
];
@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
