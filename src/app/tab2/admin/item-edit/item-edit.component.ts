import { Component, OnInit } from '@angular/core';
import { appSetting } from 'src/app/app-setting';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent implements OnInit {

  constructor(public appSetting:appSetting) { }

  ngOnInit() {}

}
