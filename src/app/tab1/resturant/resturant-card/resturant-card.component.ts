import { appSetting } from 'src/app/app-setting';

import { Component, OnInit, Input } from '@angular/core';
import { orderDetialModel } from 'src/app/Models/orderDetailModel';
import { resturantModel } from 'src/app/Models/resturantModel';

@Component({
  selector: 'app-resturant-card',
  templateUrl: './resturant-card.component.html',
  styleUrls: ['./resturant-card.component.scss'],
})
export class ResturantCardComponent implements OnInit {
@Input('data') orderDetail:orderDetialModel;
  constructor(private appSetting:appSetting) { }
  available:boolean=true;
  ngOnInit() {}

  visibilityFunction(){
    if(this.available===true){
      this.available=false;
    }else{
      this.available=true;
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
