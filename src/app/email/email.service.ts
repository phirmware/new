import { Http } from '@angular/http';
import { AppServiceService } from './../service/app-service.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmailService extends AppServiceService {

  constructor(http:Http) {
    super( 'http://jsonplaceholder.typicode.com/comments',http)
   }

}
