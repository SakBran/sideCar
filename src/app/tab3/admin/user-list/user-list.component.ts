import { Component, OnInit } from '@angular/core';
import { appSetting } from 'src/app/app-setting';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  constructor(public appSetting:appSetting,public location:Location) { }

  ngOnInit() {}
  back(){
    this.location.back();
  }

}
