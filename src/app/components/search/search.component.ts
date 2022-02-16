import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  

  constructor(private route: ActivatedRoute, private router: Router) { }
  ProductId: any;
  Name:any;
  Price:any;
  ngOnInit(): void {
    this.ProductId = this.route.snapshot.paramMap.get('id');
    this.Name = this.route.snapshot.paramMap.get('name');
    this.Price = this.route.snapshot.paramMap.get('price');
 }
 Category:any = 'Electronics';
 onButtonClick(){
     if(this.Category=='Electronics') {
       this.router.navigate(['electronics']);
     } else {
     this.router.navigate(['home']);
     }
 }

}
