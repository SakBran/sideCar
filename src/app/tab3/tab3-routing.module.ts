import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserCreateComponent } from './admin/user-create/user-create.component';
import { ResturantListComponent } from './admin/resturant-list/resturant-list.component';
import { ResturantCreateComponent } from './admin/resturant-create/resturant-create.component';
import { ItemConfirmComponent } from './admin/item-confirm/item-confirm.component';
import { ItemConfirmDetailComponent } from './admin/item-confirm-detail/item-confirm-detail.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'userList',
    component: UserListComponent,
  },
  {
    path: 'userCreate',
    component: UserCreateComponent,
  },
  {
    path: 'userEdit/:id',
    component: UserCreateComponent,
  },
  {
    path: 'resturantList',
    component: ResturantListComponent,
  }, {
    path: 'resturantEdit/:id',
    component: ResturantCreateComponent,
  }
  , {
    path: 'resturantCreate',
    component: ResturantCreateComponent,
  },
  {
    path: 'itemConfirm',
    component: ItemConfirmComponent,
  },
  {
    path: 'itemConfirmDetail',
    component: ItemConfirmDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule { }
