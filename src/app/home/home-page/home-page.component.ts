import { CategoryService } from "./../../Services/category/category.service";
import { Router } from "@angular/router";
import { ClientShopcartComponent } from "./../client-shopcart/client-shopcart.component";
import { appSetting } from "src/app/app-setting";
import { Component, OnInit } from "@angular/core";
import { Platform, ModalController } from "@ionic/angular";
import { ResturantModelService } from "src/app/Services/resturantModel/resturant-model.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  constructor(
    public plt: Platform,
    private ResturantModelService: ResturantModelService,
    private router: Router,
    public modalController: ModalController,
    private CategoryService: CategoryService,
    public appSetting: appSetting
  ) {
    if (this.plt.is("ios")) {
      // This will only print when on iOS
      this.appSetting.device = "12";
    } else if (this.plt.is("android")) {
      this.appSetting.device = "12";
    } else if (this.plt.is("tablet")) {
      this.appSetting.device = "2";
    } else if (this.plt.is("ipad")) {
      this.appSetting.device = "2";
    } else {
      this.appSetting.device = "2";
    }
    this.resturantLoaddata();
  }

  ngOnInit() {}
  search() {
    this.appSetting.customerSearch = "Search";
  }
  reset() {
    this.appSetting.customerSearch = "";
  }

  login() {
    this.router.navigateByUrl("/login");
  }

  resturantLoaddata() {
    if (this.appSetting.resturandDataList.length === 0) {
      this.ResturantModelService.get().subscribe(
        (x) => (this.appSetting.resturandDataList = x),
        (err) => this.appSetting.showError(err),
        () => {
          this.CategoryService.get().subscribe((x) => {
            (this.appSetting.categoryList = x),
              (err) => this.appSetting.showError(err),
              () => {
                this.appSetting.loadingClose();
              };
          });
        }
      );
    }
  }

  async shopCart() {
    const modal = await this.modalController.create({
      component: ClientShopcartComponent,
      //,cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
