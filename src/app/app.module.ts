import { ClientShopcartComponent } from './home/client-shopcart/client-shopcart.component';
import { HomeModule } from './home/home.module';
import { ClientInvoiceComponent } from './home/client-invoice/client-invoice.component';
import { OrderManagementListComponent } from './tab3/admin/order-management-list/order-management-list.component';
import { ItemConfirmComponent } from './tab3/admin/item-confirm/item-confirm.component';
import { OrderManagementCreateComponent } from './tab3/admin/order-management-create/order-management-create.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appSetting } from './app-setting';
import { AuthGuardService } from './auth/authGuard';
import { AuthComponent } from './auth/auth.component';
import { JwtHelperService, JwtModuleOptions, JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [AppComponent,AuthComponent],
  
  entryComponents: [ClientInvoiceComponent,ClientShopcartComponent],
  imports: [BrowserModule,HomeModule, ImageCropperModule, CommonModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    appSetting,
    StatusBar,
    SplashScreen,
    AuthComponent,
    InAppBrowser,
    AuthGuardService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
