import { orderDetialModel } from 'src/app/Models/orderDetailModel';
import { appSetting } from "src/app/app-setting";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { locationModel } from "src/app/Models/locationModel";
import { orderTransationModel } from "src/app/Models/orderTransationModel";
import { OrderService } from "src/app/Services/order/order.service";

@Component({
  selector: "app-client-info",
  templateUrl: "./client-info.component.html",
  styleUrls: ["./client-info.component.scss"],
})
export class ClientInfoComponent implements OnInit {
  constructor(
    public modalCtrl: ModalController,
    public appSetting: appSetting,
    private orderService: OrderService
  ) {}

  ngOnInit() {}
  deliverChange(e) {
    this.appSetting.orderData.Township_id = e;
    const temp: locationModel[] = [...this.appSetting.locationDataList];
    temp.forEach((x) => {
      if (x.id === e) {
        this.appSetting.orderData.deliveryCharegs = x.deliveryCharges;
      }
    });
  }
  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
  
  submitOrder() {
    this.appSetting.showLoading();
    
    const temp=[...this.appSetting.orderDetailViewList];
    let orderDetial:orderDetialModel[]=[];
    temp.forEach(x=>{
      orderDetial.push(x.orderDetialModel);
    })
    let data: orderTransationModel = {
      orderModel: this.appSetting.orderData,
      orderDetailModels: orderDetial
    };
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.appSetting.orderData.latitude = position.coords.latitude.toString();
        this.appSetting.orderData.longitude = position.coords.longitude.toString();
      
      });
    }
    this.orderService.post(data);
  }
}
