import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  get: any;
  delete: any;
  
  
  
  

  constructor( private cookie: CookieService,private router: Router) { }
  UserId:any;
  loginFlag:boolean = false;
  ngOnInit(): void {
    this.UserId = this.cookie.get('userid');
    if(this.UserId=="") {
       this.loginFlag = false;
    } else {
      this.loginFlag = true;
    }
  }
  SingoutClick() {
    this.cookie.delete('userid');
    this.router.navigate(['/login']);
  }
  
 
}
