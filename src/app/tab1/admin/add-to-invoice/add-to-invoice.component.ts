import { Component, OnInit } from '@angular/core';
import { appSetting } from 'src/app/app-setting';

@Component({
  selector: 'app-add-to-invoice',
  templateUrl: './add-to-invoice.component.html',
  styleUrls: ['./add-to-invoice.component.scss'],
})
export class AddToInvoiceComponent implements OnInit {

  constructor(public appSetting:appSetting) { }

  ngOnInit() {}

}
