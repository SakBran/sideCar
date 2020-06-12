import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-individual-order',
  templateUrl: './resturant-individual-order.component.html',
  styleUrls: ['./resturant-individual-order.component.scss'],
})
export class ResturantIndividualOrderComponent implements OnInit {

  constructor() { }
  itemVisible:boolean=false;
  ngOnInit() {}
  item:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13];

  itemVisibleMethod(){
    if(this.itemVisible===false){
      this.itemVisible=true;
    }
    else{
      this.itemVisible=false;
    }
  }

}
