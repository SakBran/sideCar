import { appSetting } from 'src/app/app-setting';
import { Component, OnInit, Input } from '@angular/core';
import { orderTransationModel } from 'src/app/Models/orderTransationModel';

@Component({
  selector: 'app-resturant-individual-order',
  templateUrl: './resturant-individual-order.component.html',
  styleUrls: ['./resturant-individual-order.component.scss'],
})
export class ResturantIndividualOrderComponent implements OnInit {
  @Input('orderNo') Orderid: number;
  itemVisible:boolean=false;
  data:orderTransationModel=new orderTransationModel();
  constructor(public appSetting:appSetting) {
  
   }
  

  ngOnInit() {
 
    this.itemFilter();
  }

  async itemFilter(){
    const temp=[...this.appSetting.orderTransationList];
    temp.forEach(x=>{
   
      if(x.orderModel.id===this.Orderid){
        this.data=x;

      }
    })
  }
  
  itemVisibleMethod(){
    if(this.itemVisible===false){
      this.itemVisible=true;
    }
    else{
      this.itemVisible=false;
    }
  }

}
