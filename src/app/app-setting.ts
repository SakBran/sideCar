import { userTypeModel } from './Models/usertypeModel';
import Swal from 'sweetalert2';


export class appSetting {
    /**
     *
     */
    constructor() {


    }
    public loginType = "admin";

    public adminProcess = "";
    public adminID = "";

    public adminTab2Process = "";
    public adminTab2ID = "";

    public adminTab3Process = "";
    public adminTab3ID = "";

    public apiAddress = "http://localhost/sidecar";

    public userTypeData:userTypeModel[]=[];

    public showLoading(){
        Swal.fire({
            title: 'System Message',
            html: 'Please wait! System is processing..',
            confirmButtonText: 'Done',
            onBeforeOpen: () => {
              Swal.showLoading();
            }
          });
    }

    public showSuccess(){
        Swal.fire('Success','Data has been saved successfully','success');
    }

    public showError(msg){
        Swal.fire('Error',msg,'error');
    }
    public showInvalid(){
        Swal.fire('Invalid Data','Please fill invalid data!','info');
    }

    public loadingClose(){
        Swal.close();
    }

}