import { foodModel } from './../../Models/foodModel';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-item-detail',
  templateUrl: './home-item-detail.component.html',
  styleUrls: ['./home-item-detail.component.scss'],
})
export class HomeItemDetailComponent implements OnInit {
@Input('data') foodDetail:foodModel;
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
