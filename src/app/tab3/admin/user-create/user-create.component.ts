import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {

    if(this.id!==null|| this.id!==undefined || this.id!==0){
      this.editLoad(this.id);
    }
  }
  userData: userModel = {
    id: 0,
    username: "",
    password: "",
    phone: "",
    usertype: 0,
    latitude: string;
    longitude: string;
  };
  ngOnInit() {}
  back(){
    this.location.back();
  }
}
  formValidation(): boolean {
    if (
      this.userData.password === "" ||
      this.userData.phone === "" ||
      this.userData.username === "" ||
      this.userData.usertype === 0
    ) {
      return false;
    }
    return true;
  }
