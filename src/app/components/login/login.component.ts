import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private cookie: CookieService,private dataservice: DataService, private router: Router) { }
  users:any[] = [];
  userError:string = '';
  frmLogin:any;

  ngOnInit(): void {
    this.dataservice.GetUsers().subscribe(user=> this.users=user);
    this.frmLogin = new FormGroup({
        UserId: new FormControl('',[Validators.required, Validators.minLength(4)]),
        Password: new FormControl('',[Validators.required, Validators.pattern(/\w{4,10}/)])
    })
  }
  get UserId(){
    return this.frmLogin.get('UserId');
  }

  get Password(){
    return this.frmLogin.get('Password');
  }

  onFormSubmit(data:any){
    for(var user of this.users)
    {
      if(user.UserId==data.UserId && user.Password==data.Password) {
        this.dataservice.GetUsers().subscribe();
        this.cookie.set('userid',user.UserId);  
        this.router.navigate(['/home']);
      } else {
         this.userError = 'Invalid User Id / Password';
      }
    }
  }
}
