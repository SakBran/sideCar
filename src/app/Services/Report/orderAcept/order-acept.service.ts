import { orderAcceptModel } from './../../../Models/orderAccpetModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appSetting } from 'src/app/app-setting';

@Injectable({
  providedIn: 'root'
})
export class OrderAceptService {
  private url = `${this.appSetting.apiAddress}/api/OrderAcceptanceForm`;
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(
    private http: HttpClient,
    private appSetting: appSetting
  ) {}

  get(start:Date,end:Date): Observable<orderAcceptModel[]> {
    return this.http.get<orderAcceptModel[]>(
      this.url + `/resturant?start='${start}'&end='${end}'`
    );
  }
}
