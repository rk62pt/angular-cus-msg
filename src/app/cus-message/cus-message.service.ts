import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { CusMessageConfig } from './cus-message-config';
import { CusMessageComponent } from './cus-message.component';

@Injectable()
export class CusMessageService {

  constructor(private dialog: MatDialog) { }

  showSysMsg(msg: string, width: number, hideClose: boolean): MatDialogRef<CusMessageComponent, string> {
    return this.dialog.open(CusMessageComponent, {
      width: width+'%',
      data: {"title": "系統訊息", "msg": msg,"hideClose":hideClose}
    });
  }

  showDefMsg(title: string, msg: string): MatDialogRef<CusMessageComponent, string> {
    return this.dialog.open(CusMessageComponent, {
      width: '30%',
      data: {"title": title, "msg": msg}
    });
  }

  showMsg(title: string, msg: string, width: number): MatDialogRef<CusMessageComponent, string> {
    return this.dialog.open(CusMessageComponent, {
      width: width+'%',
      data: {"title": title, "msg": msg}
    });
  }

  showDefTempMsg(title: string, msg: string, time: number): void {
    const matDialogRef = this.dialog.open(CusMessageComponent, {
      width: '30%',
      data: {"title": title, "msg": msg}
    });
    setInterval(function(){
      matDialogRef.close();
    },time*1000);
  }

  showTempMsg(title: string, msg: string, width: number, time: number): void {
    const matDialogRef = this.dialog.open(CusMessageComponent, {
      width: width+'%',
      data: {"title": title, "msg": msg}
    });
    setInterval(function(){
      matDialogRef.close();
    },time*1000);
  }
}