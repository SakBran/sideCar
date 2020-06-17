import { DeliveryPendingComponent } from './admin/delivery-pending/delivery-pending.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Tab1Page } from "./tab1.page";
import { AddToInvoiceComponent } from "./admin/add-to-invoice/add-to-invoice.component";

const routes: Routes = [
  {
    path: "",
    component: Tab1Page,
  },
  {
    path: "add/:id",
    component: AddToInvoiceComponent,
  },
  {
    path: "deliveryPending",
    component: DeliveryPendingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
