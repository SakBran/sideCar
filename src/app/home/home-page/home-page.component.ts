import { Router } from '@angular/router';
import { ClientShopcartComponent } from './../client-shopcart/client-shopcart.component';
import { appSetting } from 'src/app/app-setting';
import { Component, OnInit } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor(public plt: Platform,private router:Router,public modalController: ModalController,public appSetting:appSetting) {
    if (this.plt.is('ios')) {
      // This will only print when on iOS
      this.appSetting.device="mobile";
    }
    else if(this.plt.is('android')){
      this.appSetting.device="mobile";
    }
    else if(this.plt.is('tablet')){
      this.appSetting.device="tablet";
    }
    else if(this.plt.is('ipad')){
      this.appSetting.device="tablet";
    }
    else{
      this.appSetting.device="tablet";
    }
  }
  ngOnInit() {}
  search(){
    this.appSetting.customerSearch='Search';
  }
  reset(){
    this.appSetting.customerSearch='';
  }

  login(){
    this.router.navigateByUrl("/login");
  }
  async shopCart() {
    const modal = await this.modalController.create({
      component: ClientShopcartComponent
      //,cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
