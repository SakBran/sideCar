import { Component } from '@angular/core';
import { appSetting } from '../app-setting';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public appSetting:appSetting) {}

}
