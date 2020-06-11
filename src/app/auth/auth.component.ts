import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent  {


  constructor(public router: Router) {}
  // ...
  public isAuthenticated(): boolean {
    //const token = localStorage.getItem('token');
    let token='yes';
    let result=true;
    if(token==='' || token===null || token===undefined){
      result=false;
    }

    // Check whether the token is expired and return
    // true or false
    return result;
  }

  

}
