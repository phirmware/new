import { AppServiceService } from './../app-service.service';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ProfileService extends AppServiceService {

  constructor(http : Http) {
    super('http://jsonplaceholder.typicode.com/photos',http)
   }
    
}
