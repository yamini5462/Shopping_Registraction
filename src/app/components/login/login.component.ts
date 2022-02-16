import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router, private cookie: CookieService) { }
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

  onSubmit(data:any){
    for(var user of this.users)
    {
      if(user.UserId==data.UserId && user.Password==data.Password) {
        this.cookie.set('userid',user.UserId);  
        this.router.navigate(['/home']);
      } else {
         this.userError = 'Invalid User Id / Password';
      }
    }
  }
}
