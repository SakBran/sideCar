import { orderModel } from "./Models/orderModel";
import { orderDetialViewmodel } from "./Models/orderDetailViewmodel";
import { orderDetialModel } from "./Models/orderDetailModel";
import { userTypeModel } from "./Models/usertypeModel";
import Swal from "sweetalert2";
import { foodModel } from "src/app/Models/foodModel";
import { resturantModel } from "./Models/resturantModel";

export class appSetting {
  /**
   *
   */
  constructor() {}
  public loginType = "admin";

  public adminProcess = "";
  public adminID = "";

  public adminTab2Process = "";
  public adminTab2ID = "";

  public adminTab3Process = "";
  public adminTab3ID = "";

  public apiAddress = "http://localhost/sidecar";

  public userTypeData: userTypeModel[] = [];

  public resturantID = 5;

  public foodDataList: foodModel[] = [];
  public menuFoodDataList: foodModel[] = [];
  public constFoodDataList: foodModel[] = [];
  public resturandDataList: resturantModel[] = [];

  public orderDetailList: orderDetialModel[] = [];
  public orderDetailViewList: orderDetialViewmodel[] = [];

  public orderData: orderModel = {
    id: 0,
    orderDate: new Date(Date.now()),
    deliveryDate: new Date(Date.now()),
    clientName: "",
    clitentPhone: "",
    clitentFlatNo: "",
    clientAddress: "",
    deliveryCharegs: 0,
    riderID: 0,
    riderEarning: 0,
    operatorID: 0,
  };
  public showLoading() {
    Swal.fire({
      title: "System Message",
      html: "Please wait! System is processing..",
      confirmButtonText: "Done",
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
  }

  public showSuccess() {
    Swal.fire("Success", "Data has been saved successfully", "success");
  }

  public showError(msg: JSON) {
    Swal.fire("Error", JSON.stringify(msg), "error");
  }
  public showInvalid() {
    Swal.fire("Invalid Data", "Please fill invalid data!", "info");
  }

  public loadingClose() {
    Swal.close();
  }

  public resName(id): string {
    let res = "null";
    this.resturandDataList.forEach((x) => {
      if (x.id === id) {
        res = x.shopname;
      }
    });
    return res;
  }

  public itemJoin(id): itemRest {
    let i: itemRest = {
      itemName: "",
      resturant: "",
    };
    const temp = [...this.constFoodDataList];
    temp.forEach((x) => {
      console.log(x.itemName);
      if (x.id === id) {
        i.itemName = x.itemName;
        i.resturant = this.resName(x.resturant_id);
      }
    });
    return i;
  }
}
export class itemRest {
  itemName: string;
  resturant: string;
}
