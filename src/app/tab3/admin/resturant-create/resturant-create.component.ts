import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resturant-create',
  templateUrl: './resturant-create.component.html',
  styleUrls: ['./resturant-create.component.scss'],
})
export class ResturantCreateComponent implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {}
  back(){
    this.location.back();
  }
}
