import { appSetting } from 'src/app/app-setting';

import { Component, OnInit, Input } from '@angular/core';
import { orderDetialModel } from 'src/app/Models/orderDetailModel';
import { resturantModel } from 'src/app/Models/resturantModel';
import { resendModel } from 'src/app/Models/resendModel';

@Component({
  selector: 'app-resturant-card',
  templateUrl: './resturant-card.component.html',
  styleUrls: ['./resturant-card.component.scss'],
})
export class ResturantCardComponent implements OnInit {
@Input('data') orderDetail:orderDetialModel;
  constructor(private appSetting:appSetting) { 
    
  }
  available:boolean=true;
  ngOnInit() {}
  comment:string="";
  resendListKeyPress(e){
    let data:resendModel={
      orderDetailID:this.orderDetail.orderDetailID,
      comment:this.comment,
      orderNo:this.orderDetail.orderID,
      resturantID:this.appSetting.resturantID
    }
    let i=-1;
      const temp=[...this.appSetting.resendListFromResturant];
      temp.forEach(x=>{
        i=i+1;
        if(x.orderNo===data.orderNo && x.orderDetailID===data.orderDetailID){
          this.appSetting.resendListFromResturant[i].comment=this.comment;
        }
      });
      
  }
  resendListFun(e){
    let data:resendModel={
      orderDetailID:this.orderDetail.orderDetailID,
      comment:this.comment,
      orderNo:this.orderDetail.orderID,
      resturantID:this.appSetting.resturantID
    }
    if(this.available===false){
   
     this.appSetting.resendListFromResturant.push(data);
    }else{
      
      let i=-1;
      const temp=[...this.appSetting.resendListFromResturant];
      temp.forEach(x=>{
        i=i+1;
        if(x.orderNo===data.orderNo && x.orderDetailID===data.orderDetailID){
          this.appSetting.resendListFromResturant.splice(i,1);
        }
      })
    }
    
  }
  foodName(id):string{
    let result="";
    const temp=[...this.appSetting.foodDataList];
    temp.forEach(x=>{
      
      if(x.id===id){
        result=x.itemName;
      }
    });
    return result;
  }
  
}
