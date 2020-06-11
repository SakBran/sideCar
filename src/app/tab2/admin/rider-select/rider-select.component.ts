import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rider-select',
  templateUrl: './rider-select.component.html',
  styleUrls: ['./rider-select.component.scss'],
})
export class RiderSelectComponent implements OnInit {
  list:number[]=[1,2,34,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0];
  constructor() { }

  ngOnInit() {}

}
