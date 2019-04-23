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
//todo: firefox bugs
  show() {
    this.cusMessage.showDefMsg("系統訊息", "測試測試測試");
  }

  show60() {
    this.cusMessage.showMsg("系統訊息", "測試測試測試22222", 60);
  }

  show3sec() {
    this.cusMessage.showDefTempMsg("系統訊息", "測試測試測試",3);
  }

  show603sec() {
    this.cusMessage.showTempMsg("系統訊息", "測試測試測試",60,3);
  }

  showSysMsg() {
    this.cusMessage.showSysMsg("登入成功!",20,true);
  }
  showLockSysMsg() {
    this.cusMessage.showLockSysMsg("登入成功!",20,true);
  }

  showConfirm() {
    this.cusMessage.showConfirmMsg("確認訊息","是否確定刪除?",30).subscribe(result => {
      console.log(`刪除結果${result}`);
      if(result){
        this.cusMessage.showDefTempMsg("系統訊息", "資料已刪除",3);
      }
    });
  }
}
