import { Component, OnInit } from '@angular/core';
import { appSetting } from 'src/app/app-setting';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {

  constructor(public appSetting:appSetting) { }
  list:number[]=[1,2,34,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0];
  searchVisible:boolean=false;
  ngOnInit() {}

  searchVisiblity(){
    if(this.searchVisible===true){
      this.searchVisible=false;
    }
    else{
      this.searchVisible=true;
    }
  }
  addToInvoice(e){
    this.appSetting.adminProcess='new';
    this.appSetting.adminID=e;
    console.log('Work');
  }

}
