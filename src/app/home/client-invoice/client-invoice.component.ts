import { FoodService } from "src/app/Services/food/food.service";
import { OrderService } from "src/app/Services/order/order.service";
import { ClientInfoComponent } from "./../client-info/client-info.component";
import { appSetting } from "src/app/app-setting";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { orderTransationModel } from "src/app/Models/orderTransationModel";
import { isUndefined } from "util";
import { threadId } from "worker_threads";

@Component({
  selector: "app-client-invoice",
  templateUrl: "./client-invoice.component.html",
  styleUrls: ["./client-invoice.component.scss"],
})
export class ClientInvoiceComponent implements OnInit {
  invoiceNo = null;
  phoneNo = null;
  data: orderTransationModel = new orderTransationModel();
  constructor(
    public appSetting: appSetting,
    public modalCtrl: ModalController,
    public modalController: ModalController,
    private orderService: OrderService,
    private FoodService: FoodService
  ) {}

  ngOnInit() {}

  dismissModal() {
    this.data = new orderTransationModel();
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  checkUndefined(obj): boolean {
    return isUndefined(obj);
  }
  count(id, fun) {
    let i = 0;
    const temp = [...this.appSetting.orderDetailViewList];
    temp.forEach((x) => {
      i = i + 1;
      if (i === id) {
        if (fun === "add") {
          x.orderDetialModel.itemQty = x.orderDetialModel.itemQty + 1;
        } else {
          x.orderDetialModel.itemQty = x.orderDetialModel.itemQty - 1;
        }
        x.orderDetialModel.itemFinalPrice =
          this.calculatePrice(x.orderDetialModel.itemID) *
          x.orderDetialModel.itemQty;
        x.orderDetialModel.itemOrgPrice = x.orderDetialModel.itemFinalPrice;
      }
    });
  }

  delete(id) {
    let i = -1;
    const temp = [...this.appSetting.orderDetailViewList];
    temp.forEach((x) => {
      i = i + 1;
      if (i === id) {
        this.appSetting.orderDetailViewList.splice(i, 1);
      }
    });
  }

  calculatePrice(id): number {
    const temp = [...this.appSetting.menuFoodDataList];
    let res = 0;
    temp.forEach((x) => {
      if (x.id === id) {
        res = x.price;
      }
    });
    return res;
  }

  displayTotal = 0;
  total() {
    let total = 0;
    const temp = [...this.data.orderDetailModels];

    temp.forEach((x) => {
      total = total + x.itemFinalPrice;
    });

    this.displayTotal = total;
  }

  loading = 0;
  search() {
    this.loading = 1;
    this.orderService.getInvoice(this.invoiceNo, this.phoneNo).subscribe(
      (x) => (this.data = x),
      (err) => {
        this.appSetting.showInvalid();
      },
      () => {
        this.food();
      }
    );
  }

  food() {
    if (this.appSetting.constFoodDataList.length === 0) {
      this.FoodService.getActive().subscribe(
        (x) => (this.appSetting.menuFoodDataList = x),
        (err) => this.appSetting.showError(err),
        () => {
          this.appSetting.constFoodDataList = this.appSetting.menuFoodDataList;

          this.total();
          this.loading = 0;
        }
      );
    } else {
      this.total();
      this.loading = 0;
    }
  }
}
