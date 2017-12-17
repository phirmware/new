import { NamesService } from './names.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
   names : any[];
  constructor(private service : NamesService ) { }

  ngOnInit() {
    this.service.get()
    .subscribe(response => {
       this.names = response.json();
    })
  }
  
  

}
