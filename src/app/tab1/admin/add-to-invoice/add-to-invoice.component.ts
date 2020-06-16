import { Component, OnInit } from "@angular/core";
import { appSetting } from "src/app/app-setting";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { foodModel } from "src/app/Models/foodModel";

@Component({
  selector: "app-add-to-invoice",
  templateUrl: "./add-to-invoice.component.html",
  styleUrls: ["./add-to-invoice.component.scss"],
})
export class AddToInvoiceComponent implements OnInit {
  foodData = new foodModel();
  constructor(public appSetting: appSetting, private Router: ActivatedRoute) {
    this.foodData = this.loadData(+this.Router.snapshot.paramMap.get("id"));
  }

  loadData(id): foodModel {
    let result = new foodModel();
    this.appSetting.constFoodDataList.forEach((x) => {
      if (x.id === id) {
        result = x;
      }
    });
    return result;
  }

  totalAmount() {}
  ngOnInit() {}
}
