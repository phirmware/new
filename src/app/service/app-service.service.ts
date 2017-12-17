import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable()
export class AppServiceService {

  constructor(private url:string ,private http:Http) {}
    
  
     get(){
       return this.http.get(this.url)
     }
}
