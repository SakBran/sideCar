import { orderDetialModel } from "src/app/Models/orderDetailModel";
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

  ngOnInit() {
    const temp: locationModel[] = [...this.appSetting.locationDataList];
    let tempLocation: String[] = [];
    temp.forEach((x) => tempLocation.push(x.TownShip));
    this.location = tempLocation.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
  }
  deliverChange(e) {
    console.log(e);

    const temp: locationModel[] = [...this.appSetting.locationDataList];
    let calculationID = 0;
    const orderData = [...this.appSetting.orderDetailViewList];
    const foodData = [...this.appSetting.menuFoodDataList];
    orderData.forEach((x) => {
      foodData.forEach((a) => {
        if (a.id == x.orderDetialModel.itemID) {
          this.appSetting.zone.push(this.appSetting.resZone(a.resturant_id));
        }
      });
    });

    const arr = [...this.appSetting.zone];
    let unique = arr.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
    if(unique.length===1){
    temp.forEach((x) => {
      if (x.TownShip === e && x.Zone === unique[0]) {
        this.appSetting.orderData.deliveryCharegs = x.deliveryCharges;
        this.appSetting.orderData.Township_id = x.id;
      } else {
        this.appSetting.orderData.Township_id = null;
      }
    });}else{
      this.appSetting.orderData.Township_id = null;
    }
  }

  location: String[] = [];
  filter(arr) {
    var unique = arr.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
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

    const temp = [...this.appSetting.orderDetailViewList];
    let orderDetial: orderDetialModel[] = [];
    temp.forEach((x) => {
      orderDetial.push(x.orderDetialModel);
    });
    let data: orderTransationModel = {
      orderModel: this.appSetting.orderData,
      orderDetailModels: orderDetial,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.appSetting.orderData.latitude = position.coords.latitude.toString();
        this.appSetting.orderData.longitude = position.coords.longitude.toString();
      });
    }
    this.orderService.post(data);
  }
}
