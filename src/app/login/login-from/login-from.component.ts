import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-from',
  templateUrl: './login-from.component.html',
  styleUrls: ['./login-from.component.scss'],
})
export class LoginFromComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  passwordVisibility='password';
  passVisible(){
    if(this.passwordVisibility==='password'){
      this.passwordVisibility='text'
    }
    else{
      this.passwordVisibility='password';
    }
  }
  onClick(){
    this.router.navigateByUrl('/tabs');
  }

}
