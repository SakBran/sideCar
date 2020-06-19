import { Component } from "@angular/core";
import { appSetting } from "../app-setting";
import { ResturantModelService } from "src/app/Services/resturantModel/resturant-model.service";
import { FoodService } from "src/app/Services/food/food.service";
import { foodModel } from "src/app/Models/foodModel";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(
    public appSetting: appSetting,
    private FoodService: FoodService,
    private ResturantModelService: ResturantModelService
  ) {

    if(this.appSetting.loginType==="rider"){
      this.appSetting.displaySetting === "delivering";

    }
    this.loadData();
  }

  loadData() {
    if (this.appSetting.menuFoodDataList.length === 0) {
      this.appSetting.showLoading();
      this.FoodService.getActive().subscribe(
        (x) => (this.appSetting.menuFoodDataList = x),
        (err) => this.appSetting.showError(err),
        () => {
          this.appSetting.constFoodDataList = this.appSetting.menuFoodDataList;
          this.resturantLoaddata();
        }
      );
    }
  }
  searchTxt = "";
  onSearch(val) {
    const temp: foodModel[] = [...this.appSetting.constFoodDataList];
    let z: foodModel[] = [];
    temp.forEach((x) => {
      if (
        x.itemName.toLowerCase().includes(this.searchTxt.toLowerCase()) ||
        this.resName(x.resturant_id)
          .toLowerCase()
          .includes(this.searchTxt.toLowerCase())
      ) {
        z.push(x);
      }

      this.appSetting.menuFoodDataList = z;
    });
    if (this.searchTxt === "") {
      this.appSetting.menuFoodDataList = temp;
    }
  }

  resName(id): string {
    let res = "";
    this.appSetting.resturandDataList.forEach((x) => {
      if (x.id === id) {
        res = x.shopname;
      }
    });
    return res;
  }
  resturantLoaddata() {
    if (this.appSetting.resturandDataList.length === 0) {
      this.ResturantModelService.get().subscribe(
        (x) => (this.appSetting.resturandDataList = x),
        (err) => this.appSetting.showError(err),
        () => {
          this.appSetting.loadingClose();
        }
      );
    }
  }
}
