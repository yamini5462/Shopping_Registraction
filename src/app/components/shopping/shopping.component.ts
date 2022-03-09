import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
 

  constructor(private cookie: CookieService,private data: DataService, private router: Router) { }

  products:any[] = [];

  ngOnInit(): void {
    this.data.GetProducts().subscribe(data=> this.products=data);
    if(this.cookie.get('userid')=="") {
        this.router.navigate(['/login']);
    } 
  }

}
