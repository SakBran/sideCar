import { appSetting } from 'src/app/app-setting';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-rider-page',
  templateUrl: './main-rider-page.component.html',
  styleUrls: ['./main-rider-page.component.scss'],
})
export class MainRiderPageComponent implements OnInit {

  constructor(private appSetting:appSetting) {
    console.log(this.appSetting.loginType);
   }

  ngOnInit() {}
  refresh(){
    console.log(this.appSetting.loginType);
  }

}
