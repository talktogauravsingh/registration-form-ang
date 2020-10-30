import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from  '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [MatDividerModule,MatNativeDateModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatButtonModule,MatTableModule, MatInputModule],
  exports: [MatDividerModule,MatNativeDateModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatButtonModule,MatTableModule, MatInputModule],
})
export class MyMaterialModule { }
