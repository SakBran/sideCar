import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-card',
  templateUrl: './resturant-card.component.html',
  styleUrls: ['./resturant-card.component.scss'],
})
export class ResturantCardComponent implements OnInit {

  constructor() { }
  available:boolean=true;
  ngOnInit() {}

  visibilityFunction(){
    if(this.available===true){
      this.available=false;
    }else{
      this.available=true;
    }
  }
}
