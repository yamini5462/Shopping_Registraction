import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:any[] = [];
  userError:string = '';
  isUserValid:boolean = false;
  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataservice.GetUsers().subscribe(user=> this.users = user);
  }

//   VerifyUserId(userid:any){
//     for(var user of this.users) {
//          if(user.UserId===userid){
//             this.userError = 'User Id Taken - Try Another';
//             this.isUserValid = false;
//             break;
//          } else {
//            this.userError = 'User Name Available';
//            this.isUserValid = true;
//          }
//     }
//  }
  onSubmit(data:any){
    this.dataservice.RegisterUser(data).subscribe();
    alert('Registered Successfully..');
    this.router.navigate(['/login']);
}
}
