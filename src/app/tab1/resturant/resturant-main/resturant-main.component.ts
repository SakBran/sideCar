import { FoodService } from "./../../../Services/food/food.service";
import { appSetting } from "src/app/app-setting";
import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/Services/order/order.service";

@Component({
  selector: "app-resturant-main",
  templateUrl: "./resturant-main.component.html",
  styleUrls: ["./resturant-main.component.scss"],
})
export class ResturantMainComponent implements OnInit {
  constructor(
    public appSetting: appSetting,
    private FoodService: FoodService,
    private orderService: OrderService
  ) {
    this.appSetting.showLoading();
    this.orderService
      .getResturantPendings(this.appSetting.resturantID)
      .subscribe(
        (x) => {
          this.appSetting.orderTransationList = x;
        },
        (err) => this.appSetting.showError(err),
        () => {
          this.loadFoodModel();
        }
      );
  }

  loadFoodModel() {
    this.FoodService.get(this.appSetting.resturantID).subscribe(
      (x) => (this.appSetting.foodDataList = x),
      (err) => this.appSetting.showError(err),
      () => this.appSetting.loadingClose()
    );
  }
  ngOnInit() {}
}
