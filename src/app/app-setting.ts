import { orderModel } from "./Models/orderModel";
import { orderDetialViewmodel } from "./Models/orderDetailViewmodel";
import { orderDetialModel } from "./Models/orderDetailModel";
import { userTypeModel } from "./Models/usertypeModel";
import Swal from "sweetalert2";
import { foodModel } from "src/app/Models/foodModel";
import { resturantModel } from "./Models/resturantModel";
import { locationModel } from "./Models/locationModel";
import { orderTransationModel } from "./Models/orderTransationModel";
import { resendModel } from "./Models/resendModel";

export class appSetting {
  /**
   *
   */
  constructor() {}
  public loginType = "";

  public displaySetting = "pending";

  public adminProcess = "";
  public adminID = "";

  public adminTab2Process = "";
  public adminTab2ID = "";

  public adminTab3Process = "";
  public adminTab3ID = "";

  public apiAddress = "http://localhost/sidecar";

  public userTypeData: userTypeModel[] = [];

  public resturantID = 0;
  public sessionUserID = 0;

  public foodDataList: foodModel[] = [];
  public menuFoodDataList: foodModel[] = [];
  public constFoodDataList: foodModel[] = [];
  public resturandDataList: resturantModel[] = [];

  public locationDataList: locationModel[] = [];

  public orderDetailList: orderDetialModel[] = [];
  public orderDetailViewList: orderDetialViewmodel[] = [];

  public orderTransationList: orderTransationModel[] = [];
  public resendListFromResturant: resendModel[] = [];
  public orderData: orderModel = {
    id: 0,
    orderDate: new Date(Date.now()),
    deliveryDate: new Date(Date.now()),
    clientName: "",
    clitentPhone: "09-",
    clitentFlatNo: "",
    clientAddress: "",
    deliveryCharegs: 0,
    riderID: 0,
    Township_id: 0,
    riderEarning: 0,
    operatorID: this.sessionUserID,
    status: "pending",
  };

  public orderTransationClear() {
    this.orderData = {
      id: 0,
      orderDate: new Date(Date.now()),
      deliveryDate: new Date(Date.now()),
      clientName: "",
      clitentPhone: "09-",
      clitentFlatNo: "",
      clientAddress: "",
      deliveryCharegs: 0,
      riderID: 0,
      Township_id: 0,
      riderEarning: 0,
      operatorID: this.sessionUserID,
      status: "pending",
    };
    this.orderDetailList = [];
    this.orderDetailViewList = [];
  }
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

  public loginSuccess() {
    Swal.fire("Success", "Login successful", "success");
  }

  public loginFail() {
    Swal.fire("Opps", "Failed to login", "warning");
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

  public resendBtn(orderNo): boolean {
    let result: boolean = true;
    const temp = [...this.resendListFromResturant];
    temp.forEach((x) => {
      if (x.orderNo === orderNo) {
        result = false;
      }
    });
    return result;
  }

  public riderEarning(amount): number {
    return 0;
  }
  public itemJoin(id): itemRest {
    let i: itemRest = {
      itemName: "",
      resturant: "",
    };
    const temp = [...this.constFoodDataList];
    temp.forEach((x) => {
      if (x.id === id) {
        i.itemName = x.itemName;
        i.resturant = this.resName(x.resturant_id);
      }
    });
    return i;
  }

  public displayFunction(x: string) {
    this.displaySetting = x;
  }

  public logout() {
    this.loginType = "";

    this.displaySetting = "pending";

    this.adminProcess = "";
    this.adminID = "";

    this.adminTab2Process = "";
    this.adminTab2ID = "";

    this.adminTab3Process = "";
    this.adminTab3ID = "";

    this.userTypeData = [];

    this.resturantID = 0;
    this.sessionUserID = 0;

    this.foodDataList = [];
    this.menuFoodDataList = [];
    this.constFoodDataList = [];
    this.resturandDataList = [];

    this.locationDataList = [];

    this.orderDetailList = [];
    this.orderDetailViewList = [];

    this.orderTransationList = [];
    this.resendListFromResturant = [];
    this.orderData = {
      id: 0,
      orderDate: new Date(Date.now()),
      deliveryDate: new Date(Date.now()),
      clientName: "",
      clitentPhone: "09-",
      clitentFlatNo: "",
      clientAddress: "",
      deliveryCharegs: 0,
      riderID: 0,
      Township_id: 0,
      riderEarning: 0,
      operatorID: this.sessionUserID,
      status: "pending",
    };
  }
}
export class itemRest {
  itemName: string;
  resturant: string;
}
