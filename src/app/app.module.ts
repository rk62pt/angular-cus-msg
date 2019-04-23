import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatDialogModule } from '@angular/material';
import { CusMessageModule } from './cus-message/cus-message.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    CusMessageModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
  ],
  bootstrap:    [ AppComponent ],
  exports: [ MatDialogModule ]
})
export class AppModule { }

