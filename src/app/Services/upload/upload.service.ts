import { appSetting } from "./../../app-setting";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  private url = `${this.appSetting.apiAddress}/api/upload`;
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "multipart/form-data",
    }),
  };
  constructor(private http: HttpClient, private appSetting: appSetting) {}

  post(data:File, filename): void {
    let Uploadurl = this.url + `?filename=${filename}`;

    var reader = new FileReader();

    const formData: FormData = new FormData();
    console.log(data);
    const blob = new Blob([data],{type: 'image/png'})
    formData.append('fileKey', blob, filename);
    if (formData !== null) {
      this.http.post<any>(Uploadurl, formData,this.httpOptions).subscribe(
        (x) => console.log(x),
        (err) => {
          this.appSetting.showError(err);
        },
        () => {
          this.appSetting.showSuccess();
        }
      );
    }
  }

  b64toBlob(dataURI): Blob {
    var byteString = atob(dataURI.split(",")[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: "image/jpeg" });
  }
}
