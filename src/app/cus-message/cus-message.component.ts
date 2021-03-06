import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry } from '@angular/material';
import { CusMessageConfig } from './cus-message-config';

@Component({
  selector: 'app-cus-message',
  templateUrl: './cus-message.component.html',
  styleUrls: ['./cus-message.component.css']
})
export class CusMessageComponent{
  constructor(@Inject(MAT_DIALOG_DATA)public config: CusMessageConfig, public dialogRef: MatDialogRef<CusMessageComponent>) { }



}