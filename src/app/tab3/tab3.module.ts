import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module'
import { ItemConfirmComponent } from './admin/item-confirm/item-confirm.component';
import { ResturantComponent } from '../tabs/resturant/resturant.component';

import { UserCreateComponent } from './admin/user-create/user-create.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { MainPageComponent } from './admin/main-page/main-page.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page,MainPageComponent,UserListComponent,UserCreateComponent,
    ResturantComponent,ResturantComponent,ItemConfirmComponent]
})
export class Tab3PageModule {}
