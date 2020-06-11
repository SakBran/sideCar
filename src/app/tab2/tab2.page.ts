import { Component } from '@angular/core';
import { appSetting } from '../app-setting';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public appSetting:appSetting) {}

}
