import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client-shopcart',
  templateUrl: './client-shopcart.component.html',
  styleUrls: ['./client-shopcart.component.scss'],
})
export class ClientShopcartComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
