import { OrderService } from 'src/app/Services/order/order.service';
import { appSetting } from "./../../../app-setting";
import { UserModelService } from "./../../../Services/userModel/user-model.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { userModel } from "src/app/Models/userModel";
import { orderModel } from "src/app/Models/orderModel";
import { orderTransationModel } from 'src/app/Models/orderTransationModel';

@Component({
  selector: "app-rider-select",
  templateUrl: "./rider-select.component.html",
  styleUrls: ["./rider-select.component.scss"],
})
export class RiderSelectComponent implements OnInit {
  rider: userModel[] = [];
  progressRider: userModel[] = [];
  id = 0;
  data: orderModel = new orderModel();

  riderSelection: string = "available";

  constructor(
    private route: ActivatedRoute,
    public appSetting: appSetting,
    private router: Router,
    private UserModelService: UserModelService,
    private orderService:OrderService
  ) {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.loadAvailable();
    this.appSetting.orderTransationList.forEach((x) => {
      if (x.orderModel.id === this.id) {
        this.data = x.orderModel;
      }
    });
  }

  ngOnInit() {}

  loadAvailable() {
    this.appSetting.showLoading();
    this.UserModelService.getAvailableRider().subscribe(
      (x) => (this.rider = x),
      (err) => this.appSetting.showError(err),
      () => {
        this.riderSelection = "available";
        this.appSetting.loadingClose();
      }
    );
  }
  loadInProgress() {
    this.appSetting.showLoading();
    this.UserModelService.getDeliveringRider().subscribe(
      (x) => (this.progressRider = x),
      (err) => this.appSetting.showError(err),
      () => {
        this.riderSelection = "inProgress";
        this.appSetting.loadingClose();
      }
    );
  }

  refresh(e) {
    this.UserModelService.getAvailableRider().subscribe(
      (x) => (this.rider = x),
      (err) => this.appSetting.showError(err),
      () => {
        e.target.complete();
      }
    );
  }

  refreshDelivering(e) {
    this.UserModelService.getDeliveringRider().subscribe(
      (x) => (this.progressRider = x),
      (err) => this.appSetting.showError(err),
      () => {
        e.target.complete();
      }
    );
  }

  onSelect(id){
    this.appSetting.showLoading();
    this.data.riderID=id;
    this.data.status='delivering';
    this.orderService.put(this.data);
    this.router.navigateByUrl('/tabs/tab1/deliveryPending');
  }

}
