import { Component, OnInit } from "@angular/core";
import { appSetting } from "./../../../app-setting";
import { Router, ActivatedRoute } from "@angular/router";
import { orderTransationModel } from "src/app/Models/orderTransationModel";
import { orderModel } from "src/app/Models/orderModel";
import { Location } from "@angular/common";

@Component({
  selector: "app-customer-info",
  templateUrl: "./customer-info.component.html",
  styleUrls: ["./customer-info.component.scss"],
})
export class CustomerInfoComponent implements OnInit {
  constructor(
    public appSetting: appSetting,
    public location: Location,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.paramMap.get("id");
  }
  id = 0;
  ngOnInit() {
    this.getCustomerInfo();
  }
  orderData: orderModel = new orderModel();
  back() {
    this.location.back();
  }
  onClick() {}
  getCustomerInfo() {
    const temp: orderTransationModel[] = this.appSetting.orderTransationList;
    temp.forEach((x) => {
      if (x.orderModel.id === this.id) {
        this.orderData = x.orderModel;
      }
    });
  }
}
