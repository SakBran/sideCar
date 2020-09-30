import { mainModel } from 'src/app/Models/mainModel';
import { HomeItemDetailComponent } from "./../home-item-detail/home-item-detail.component";
import { appSetting } from "src/app/app-setting";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { LocationService } from "src/app/Services/location/location.service";
import { MainModelService } from 'src/app/Services/mainModel/main-model.service';
import { ResturantModelService } from 'src/app/Services/resturantModel/resturant-model.service';

@Component({
  selector: "app-home-items",
  templateUrl: "./home-items.component.html",
  styleUrls: ["./home-items.component.scss"],
})
export class HomeItemsComponent implements OnInit {
  constructor(

    public appSetting: appSetting,
    private LocationService: LocationService,
    private mainItemService:MainModelService,
    public modalController: ModalController,
    public ResturantModelService:ResturantModelService
  ) {
   
    this.mainItemService.get().subscribe(
      
      (x) => (this.appSetting.mainItemDataList = x),
      (err) => this.appSetting.showError(err),
      () => {
        this.appSetting.constmainItemDataList = this.appSetting.mainItemDataList;
        if(this.appSetting.customerSearch!==""){
        this.onSearch(this.appSetting.customerSearch);
        }
      }
    );
    this.locationReload();
  }

  ngOnInit() {
    
  }

  locationReload() {
    if (this.appSetting.locationDataList.length === 0) {
      this.LocationService.get().subscribe(
        (x) => (this.appSetting.locationDataList = x),
        (err) => console.log(err),
        () => {
        
        }
      );
    }
  }
  
  cardClick(cardID) {
    this.itemDetail(cardID.toString());
  }

  searchResturant = 0;
  Filter(e) {
 
    const temp = [...this.appSetting.constmainItemDataList];
    let res: mainModel[] = [];
    temp.forEach((x) => {
      if (x.resturant_id === e) {
        res.push(x);
      }
    });
    this.appSetting.mainItemDataList = res;
  }

  searchCategory = 0;
  FilterCategory(e) {

    const temp = [...this.appSetting.constmainItemDataList];
    let res: mainModel[] = [];
    temp.forEach((x) => {
      if (x.category_id === e) {
        res.push(x);
      }
    });
    this.appSetting.mainItemDataList = res;
  }
  resturantChoose() {
    let a = document.getElementById("select");
    a.click();
  }
  categoryChoose() {
    let a = document.getElementById("selectCategory");
    a.click();
  }
  refresh() {
    this.mainItemService.get().subscribe(
      (x) => (this.appSetting.mainItemDataList = x),
      (err) => this.appSetting.showError(err),
      () => {
        this.appSetting.constmainItemDataList = this.appSetting.mainItemDataList;
      }
    );
  }

  
  onSearch(val) {
    const temp: mainModel[] = [...this.appSetting.constmainItemDataList];
    let z: mainModel[] = [];
    temp.forEach((x) => {
      if (x.name.toLowerCase().includes(this.appSetting.customerSearch.toLowerCase())) {
        z.push(x);
      }

      this.appSetting.mainItemDataList = z;
    });
    if (this.appSetting.customerSearch === "") {
      this.appSetting.mainItemDataList = temp;
    }
  }

  async itemDetail(id: String) {
    this.appSetting.detailID = +id;
    const modal = await this.modalController.create({
      component: HomeItemDetailComponent,

      //,cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
