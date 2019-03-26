import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatDialogModule
} from '@angular/material';
import { CusMessageService } from './cus-message.service';
import { CusMessageComponent } from './cus-message.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [ 
    CusMessageService
  ],
  exports: [
    CusMessageComponent
  ],
  entryComponents: [
    CusMessageComponent
  ],
  declarations: [
    CusMessageComponent
  ]
})
export class CusMessageModule { }