import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }
  invalidLogin:boolean;
                                                 
   login = new FormGroup({                            
     'email': new FormControl('',Validators.required),  
     'password': new FormControl('',Validators.required)
   });
   
  
    signin(){ 
       this.authService.login(this.login.value) 
       .subscribe(result => {
         if (result){
           this.router.navigate(['/user'])
         }
         else this.invalidLogin= true;
       })
    }
}
