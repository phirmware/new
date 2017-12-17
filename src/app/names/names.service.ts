import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppServiceService } from '../service/app-service.service';

@Injectable()
export class NamesService extends AppServiceService {

  constructor(http:Http) {
    super('http://jsonplaceholder.typicode.com/comments',http)
   }

}
