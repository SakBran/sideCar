import { orderDetialModel } from './../../Models/orderDetailModel';
import { appSetting } from './../../app-setting';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { orderTransationModel } from 'src/app/Models/orderTransationModel';
import { resendModel } from 'src/app/Models/resendModel';
import { orderModel } from 'src/app/Models/orderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = `${this.appSetting.apiAddress}/api/orderModels`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient,private appSetting:appSetting) { }

  get(): Observable<orderTransationModel[]> {
    return this.http.get<orderTransationModel[]>(this.url+'/'+this.appSetting.sessionUserID);
  }

  getResturantOrder(): Observable<orderTransationModel[]> {
    console.log(this.url+'/resturant/orderTracking?id='+this.appSetting.resturantID);
    return this.http.get<orderTransationModel[]>(this.url+'/resturant/orderTracking?id='+this.appSetting.resturantID);
  }
  getResturantPendings(id: number): Observable<orderTransationModel[]> {
    const searchUrl = `${this.url}/resturant/pendings?ResturantID=${id}`;
    return this.http.get<orderTransationModel[]>(searchUrl);
  }

  getResturantComplete(id: number): Observable<orderTransationModel[]> {
    const searchUrl = `${this.url}/resturant/complete?ResturantID=${id}`;
    return this.http.get<orderTransationModel[]>(searchUrl);
  }

  getRiderComplete(): Observable<orderTransationModel[]> {
    const searchUrl = `${this.url}/rider/complete?id=${this.appSetting.sessionUserID}`;
    return this.http.get<orderTransationModel[]>(searchUrl);
  }

  getRiderPending(): Observable<orderTransationModel[]> {
    const searchUrl = `${this.url}/rider/pending?id=${this.appSetting.sessionUserID}`;
    return this.http.get<orderTransationModel[]>(searchUrl);
  }
  
  
  post(data: orderTransationModel): void {
    data.orderModel.operatorID=this.appSetting.sessionUserID;
    this.http.post(this.url, data, this.httpOptions).subscribe(
      res => {
        console.log(res);
       this.appSetting.orderTransationClear();
        this.appSetting.showSuccess();
      },
      err => {
        this.appSetting.showError(err);
      }
    );
  }

  put(data: orderModel): void {
    const searchUrl = `${this.url}/${data.id}`;
    this.http.put(searchUrl, data, this.httpOptions).subscribe(
      res => {
        console.log(res);
        this.appSetting.showSuccess();
      },
      err => {
        console.log(err);
        this.appSetting.showError(err);
      }
    );
  }

  putOrderDetail(data: orderDetialModel): void {
    const searchUrl = `${this.appSetting.apiAddress}/api/orderDetailModels/${data.orderDetailID}`;
    this.http.put(searchUrl, data, this.httpOptions).subscribe(
      res => {
        console.log(res);
        this.appSetting.showSuccess();
      },
      err => {
        console.log(err);
        this.appSetting.showError(err);
      }
    );
  }

  putResend_From_Resturant(orderID,data: resendModel[]): void {
    const searchUrl = `${this.url}/resturant/resend?id=${orderID}&ResturantID=${this.appSetting.resturantID}`;
    this.http.put(searchUrl, data, this.httpOptions).subscribe(
      res => {
        console.log(res);
        let i=-1;
        const temp=[...this.appSetting.orderTransationList];
        temp.forEach(x=>{
        i=i+1;
        if(x.orderModel.id===orderID){
          this.appSetting.orderTransationList.splice(i,1);
        }
        })
        this.appSetting.showSuccess();
        this.appSetting.resendListFromResturant=[];
      },
      err => {
        console.log(err);
        this.appSetting.showError(err);
      }
    );
  }

  

  delete(id: number): void {
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open('DELETE', this.url + '/' + id);

    xhr.send(data);
  }

  deleteOrderDetail(id: number): void {
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open('DELETE',`${this.appSetting.apiAddress}/api/orderDetailModels/` + id);

    xhr.send(data);
    
  }
}

