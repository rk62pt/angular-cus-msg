import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CusMessageService } from './cus-message/cus-message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(
    private dialog: MatDialog,
    private cusMessage: CusMessageService){}

  show() {
    this.cusMessage.showMsg("系統訊息", "測試測試測試");
  }
}
