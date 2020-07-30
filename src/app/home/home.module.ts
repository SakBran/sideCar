import { ClientShopcartComponent } from './client-shopcart/client-shopcart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeItemsComponent } from './home-items/home-items.component';


@NgModule({
  declarations: [HomePageComponent, HomeItemsComponent, ClientShopcartComponent],
  imports: [
    IonicModule,
    CommonModule, FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
