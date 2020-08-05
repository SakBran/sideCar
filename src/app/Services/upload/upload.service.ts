import { appSetting } from "./../../app-setting";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Swal from "sweetalert2";
import { encode } from 'punycode';
@Injectable({
  providedIn: "root",
})
export class UploadService {
  private url = `${this.appSetting.apiAddress}/api/upload`;
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private http: HttpClient, private appSetting: appSetting) {}

  post(data, filename): void {
    this.url = this.url + `?filename=${filename}`;
   
    
    const formData: FormData = new FormData();
    formData.append("fileKey", data, filename);
    this.http.post(this.url, FormData, this.httpOptions).subscribe(
      (x) => console.log(x),
      (err) => this.appSetting.showError(err),
      () => {
        this.appSetting.showSuccess();
      }
    );
  }

  
}
