import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  GetUsers():Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:4400/getusers');
 }
 RegisterUser(data:any):Observable<any> {
  return this.http.post<any>('http://127.0.0.1:4400/registeruser', data);
}
GetProducts():Observable<any[]>{
  return this.http.get<any[]>('http://fakestoreapi.com/products');
}
 
}
