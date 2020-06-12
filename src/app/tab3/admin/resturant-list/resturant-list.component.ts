import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.scss'],
})
export class ResturantListComponent implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {}
  back(){
    this.location.back();
  }
}
