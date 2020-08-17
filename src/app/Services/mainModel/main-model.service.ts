import { appSetting } from "./../../app-setting";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Swal from "sweetalert2";
import { mainModel } from 'src/app/Models/mainModel';

@Injectable({
  providedIn: 'root'
})
export class MainModelService {
  private url = `${this.appSetting.apiAddress}/api/mainModels`;
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private http: HttpClient, private appSetting: appSetting) {}

  get(): Observable<mainModel[]> {
    return this.http.get<mainModel[]>(this.url);
  }
  getSingle(id: number): Observable<mainModel> {
    const searchUrl = `${this.url}/${id}`;
    return this.http.get<mainModel>(searchUrl);
  }
  post(data: mainModel): void {
    this.http.post(this.url, data, this.httpOptions).subscribe(
      (res) => {
        console.log(res);
        this.appSetting.showSuccess();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  put(data: mainModel): void {
    const searchUrl = `${this.url}/${data.id}`;
    this.http.put(searchUrl, data, this.httpOptions).subscribe(
      (res) => {
        console.log(res);
        this.appSetting.showSuccess();
      },
      (err) => {
        console.log(err);
        this.appSetting.showError(err);
      }
    );
  }

  delete(id: number): void {
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("DELETE", this.url + "/" + id);

    xhr.send(data);
  }
}
