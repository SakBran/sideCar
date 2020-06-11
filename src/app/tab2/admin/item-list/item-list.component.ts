import { Component, OnInit } from '@angular/core';
import { appSetting } from 'src/app/app-setting';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {

  constructor(public appSetting:appSetting) { }
  list:number[]=[1,2,34,5,6];
  ngOnInit() {}
  editInvoice(i){
    this.appSetting.adminTab2Process='edit';
  }
  riderSelect(){
    this.appSetting.adminTab2Process='riderSelect'
  }
}
