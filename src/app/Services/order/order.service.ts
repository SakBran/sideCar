import { appSetting } from './../../app-setting';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { orderTransationModel } from 'src/app/Models/orderTransationModel';
import { resendModel } from 'src/app/Models/resendModel';

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
    return this.http.get<orderTransationModel[]>(this.url);
  }
  getResturantPendings(id: number): Observable<orderTransationModel[]> {
    const searchUrl = `${this.url}/resturant/pendings?ResturantID=${id}`;
    return this.http.get<orderTransationModel[]>(searchUrl);
  }

  getResturantComplete(id: number): Observable<orderTransationModel[]> {
    const searchUrl = `${this.url}/resturant/complete?ResturantID=${id}`;
    return this.http.get<orderTransationModel[]>(searchUrl);
  }
  
  post(data: orderTransationModel): void {
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

  put(data: orderTransationModel): void {
    const searchUrl = `${this.url}/${data.orderModel.id}`;
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
    const searchUrl = `${this.url}/resturant/resend?id=${orderID}`;
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

    xhr.open('DELETE', this.url + '/orderDetail/' + id);

    xhr.send(data);
  }
}

