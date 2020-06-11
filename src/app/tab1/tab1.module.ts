import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ItemListComponent } from './admin/item-list/item-list.component';
import { MainPageComponent } from './admin/main-page/main-page.component';
import { AddToInvoiceComponent } from './admin/add-to-invoice/add-to-invoice.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page,ItemListComponent,MainPageComponent,AddToInvoiceComponent]
})
export class Tab1PageModule {}
