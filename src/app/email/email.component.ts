import { EmailService } from './email.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private service : EmailService) { }
   email : any[];
  ngOnInit() {
     this.service.get()
     .subscribe(response => {
       this.email = response.json();
     })
  }



}
