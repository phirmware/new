import { ProfileService } from './profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:ProfileService) { }

  ngOnInit() {
  }
    pics : any[];
    show(){
       this.service.get()
       .subscribe(response => {
           this.pics = response.json();
       })
    }
}
