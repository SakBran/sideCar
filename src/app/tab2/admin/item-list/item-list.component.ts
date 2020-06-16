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

   itemJoin(id):itemRest{
    let i:itemRest={
      itemName:'',resturant:''
    }
    const temp=[...this.appSetting.constFoodDataList];
    temp.forEach(x=>{
      console.log(x.itemName);
      if(x.id===id){
        
        i.itemName=x.itemName;
        i.resturant=this.appSetting.resName(x.resturant_id);
      }
    })
    return i;
  }

  deleteInvoice(id){
    this.appSetting.orderDetailList.splice(id,1);
    this.appSetting.orderDetailViewList.splice(id,1);
  }
}
export class itemRest{
  itemName:string;
  resturant:string;
}