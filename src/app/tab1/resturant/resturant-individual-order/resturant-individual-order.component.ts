import { appSetting } from 'src/app/app-setting';
import { Component, OnInit, Input } from '@angular/core';
import { orderTransationModel } from 'src/app/Models/orderTransationModel';
import { resendModel } from 'src/app/Models/resendModel';
import { OrderService } from 'src/app/Services/order/order.service';

@Component({
  selector: 'app-resturant-individual-order',
  templateUrl: './resturant-individual-order.component.html',
  styleUrls: ['./resturant-individual-order.component.scss'],
})
export class ResturantIndividualOrderComponent implements OnInit {
  @Input('orderNo') Orderid: number;
  itemVisible:boolean=false;
  data:orderTransationModel=new orderTransationModel();
  invoiceNo=0;
  constructor(public appSetting:appSetting,private orderService:OrderService) {
   
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

  total():number{
    let total=0;
      this.data.orderDetailModels.forEach(x=>{
        this.invoiceNo=x.orderID;
        total=total+x.itemFinalPrice;
      });
    
    return total;
  }
  itemVisibleMethod(){
    if(this.itemVisible===false){
      this.itemVisible=true;
    }
    else{
      this.itemVisible=false;
    }
  }

  sendToServer(){
    this.appSetting.showLoading();
    const temp=[...this.appSetting.resendListFromResturant];
    let dataList:resendModel[]=[];
    temp.forEach(x=>{
      if(x.orderNo===this.invoiceNo)
      {
        dataList.push(x);
      }
    });
    
    this.orderService.putResend_From_Resturant(this.invoiceNo,dataList);
  }

}
