import { CategoryService } from './../../../Services/category/category.service';
import { Component, OnInit } from "@angular/core";
import { appSetting } from "src/app/app-setting";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { FoodService } from "src/app/Services/food/food.service";
import { foodModel } from "src/app/Models/foodModel";
import { ImageCroppedEvent } from "ngx-image-cropper";

@Component({
  selector: "app-food-create",
  templateUrl: "./food-create.component.html",
  styleUrls: ["./food-create.component.scss"],
})
export class FoodCreateComponent implements OnInit {
  id = +this.Router.snapshot.paramMap.get("id");
  constructor(
    public location: Location,
    public appSetting: appSetting,
    private FoodService: FoodService,
    private route: Router,
    private Router: ActivatedRoute,
    private categoryService:CategoryService
  ) {
    this.getCategory();
  }

  ngOnInit() {
    if (this.id !== null || this.id !== undefined || this.id !== 0) {
      this.editLoad(this.id);
    }
  }

  getCategory(){
    this.categoryService.get().subscribe(x=>{
      this.appSetting.categoryList=x;
    });
  }
  back() {
    this.location.back();
  }

  foodData: foodModel = {
    id: 0,
    itemName: "",
    itemNameTemp: "",
    resturant_id: this.appSetting.resturantID,
    price: 0,
    priceTemp: 0,
    status: "pending",
    categoryType_ID: 0,
    imageURI: "",
  };
  editLoad(id) {
    this.appSetting.showLoading();
    if (id !== 0) {
      this.FoodService.getSingle(id).subscribe(
        (x) => (this.foodData = x),
        (err) => this.appSetting.showError(err),
        () => {
          this.foodData.itemNameTemp = this.foodData.itemName;
          this.foodData.priceTemp = this.foodData.price;
          this.appSetting.loadingClose();
        }
      );
    } else {
      this.appSetting.loadingClose();
    }
  }
  formValidation(): boolean {
    if (this.foodData.itemName === "" || this.foodData.price === 0) {
      return false;
    }
    return true;
  }

  create() {
    this.appSetting.showLoading();
    if (this.formValidation() === true) {
      this.FoodService.post(this.foodData, this.croppedImage);
    } else {
      this.appSetting.showInvalid();
    }
  }

  update() {
    this.appSetting.showLoading();
    if (this.formValidation() === true) {
      this.foodData.status = "pending";
      this.FoodService.put(this.foodData);
      // this.route.navigateByUrl('tabs/tab3/resturantList');
    } else {
      this.appSetting.showInvalid();
    }
  }
  croppedImage:any='';
  //Image
 


imageChangedEvent: any = '';


fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
  //Image
}
