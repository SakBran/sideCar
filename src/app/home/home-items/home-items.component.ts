import { CategoryService } from './../../Services/category/category.service';
import { foodModel } from './../../Models/foodModel';
import { appSetting } from "src/app/app-setting";
import { FoodService } from "./../../Services/food/food.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-items",
  templateUrl: "./home-items.component.html",
  styleUrls: ["./home-items.component.scss"],
})
export class HomeItemsComponent implements OnInit {
  constructor(
    private FoodService: FoodService,
    public appSetting: appSetting
    
  ) {
    console.log(this.appSetting.menuFoodDataList)
    this.FoodService.getActive().subscribe(
      (x) => (this.appSetting.menuFoodDataList = x),
      (err) => this.appSetting.showError(err),
      () => {
        this.appSetting.constFoodDataList = this.appSetting.menuFoodDataList;
      }
    );
    
  }

  ngOnInit() {}

  cardClick(cardID) {}

  searchResturant=0;
  Filter(e){
    console.log(e);
    const temp=[...this.appSetting.constFoodDataList];
    let res:foodModel[]=[];
    temp.forEach(x=>{
      if(x.resturant_id===e){
        res.push(x);
      }
    });
    this.appSetting.menuFoodDataList=res;
  }

  searchCategory=0;
  FilterCategory(e){
    console.log(e);
    const temp=[...this.appSetting.constFoodDataList];
    let res:foodModel[]=[];
    temp.forEach(x=>{
      if(x.categoryType_ID===e){
        res.push(x);
      }
    });
    this.appSetting.menuFoodDataList=res;
  }
  resturantChoose(){
    let a=document.getElementById("select")
    a.click();
  }
  categoryChoose(){
    let a=document.getElementById("selectCategory")
    a.click();
  }
  refresh() {
    this.FoodService.getActive().subscribe(
      (x) => (this.appSetting.menuFoodDataList = x),
      (err) => this.appSetting.showError(err),
      () => {
        this.appSetting.constFoodDataList = this.appSetting.menuFoodDataList;
       
      }
    );
  
}

searchTxt="";
  onSearch(val) {
    const temp: foodModel[] = [...this.appSetting.constFoodDataList];
    let z: foodModel[] = [];
    temp.forEach((x) => {
      if (x.itemName.toLowerCase().includes(this.searchTxt.toLowerCase())) {
        z.push(x);
      }

      this.appSetting.menuFoodDataList = z;
    });
    if (this.searchTxt === "") {
      this.appSetting.menuFoodDataList = temp;
    }
  }
}
