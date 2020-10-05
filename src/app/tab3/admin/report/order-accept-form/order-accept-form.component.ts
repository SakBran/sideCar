import { orderAcceptModel } from './../../../../Models/orderAccpetModel';
import { Component, OnInit } from '@angular/core';
import { OrderAceptService } from 'src/app/Services/Report/orderAcept/order-acept.service';

@Component({
  selector: 'app-order-accept-form',
  templateUrl: './order-accept-form.component.html',
  styleUrls: ['./order-accept-form.component.scss'],
})
export class OrderAcceptFormComponent implements OnInit {

  dataList:orderAcceptModel[]=[];
  startDate:Date=new Date();
  endDate:Date=new Date();
  constructor(private orderAcceptService:OrderAceptService) {
   
    this.orderAcceptService.get(this.startDate,this.endDate).subscribe(x=>{
      this.dataList=x
    })
   }

  ngOnInit() {}

  click(){

    this.orderAcceptService.get(this.startDate,this.endDate).subscribe(x=>
      this.dataList=x,err=>console.log(err),()=>{console.log(this.dataList)}
    )
  }
}
