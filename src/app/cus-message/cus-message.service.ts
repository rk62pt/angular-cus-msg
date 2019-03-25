import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { CusMessageConfig } from './cus-message-config';
import { CusMessageComponent } from './cus-message.component';

@Injectable()
export class CusMessageService {

  constructor(private dialog: MatDialog) { }

  showMsg(title: string, msg: string): MatDialogRef<CusMessageComponent, string> {
    let _dialogConfig: MatDialogConfig<CusMessageConfig>;
    return this.dialog.open(CusMessageComponent, {
      width: '45%',
      data: {"title": title, "msg": msg}
    });
  }
}