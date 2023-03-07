import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result, Production } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string = "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json"

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Result>{
    return this.http.get<Result>(this.url)
  }
   
  
}