import { Component, OnInit } from "@angular/core";
import { appSetting } from "src/app/app-setting";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.scss"],
})
export class ItemListComponent implements OnInit {
  constructor(public appSetting: appSetting) {}

  ngOnInit() {}

  resName(id): string {
    let res = "";
    this.appSetting.resturandDataList.forEach((x) => {
      if (x.id === id) {
        res = x.shopname;
      }
    });
    return res;
  }
  addToInvoice(e) {
    this.appSetting.adminProcess = "new";
    this.appSetting.adminID = e;
    console.log("Work");
  }
}
