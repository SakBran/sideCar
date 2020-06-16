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
}
