import { ClientInvoiceComponent } from './client-invoice/client-invoice.component';
import { HomeItemDetailComponent } from "./home-item-detail/home-item-detail.component";
import { ClientShopcartComponent } from "./client-shopcart/client-shopcart.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomeItemsComponent } from "./home-items/home-items.component";
import { ClientInfoComponent } from './client-info/client-info.component';

const pages:any=[
  HomePageComponent,
  HomeItemDetailComponent,
  HomeItemsComponent,
  ClientInfoComponent,
  ClientShopcartComponent,
  ClientInvoiceComponent
]
@NgModule({
  declarations: pages,

  imports: [IonicModule, CommonModule, FormsModule, HomeRoutingModule],
  exports:pages
})
export class HomeModule {}
