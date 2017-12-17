import { Authguard } from './service/authguard.service';
import { AuthService } from './service/auth.service';
import { EmailService } from './email/email.service';
import { ProfileService } from './service/profile/profile.service';
import { AppServiceService } from './service/app-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http'

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ProfileComponent } from './service/profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, CanActivate } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { NamesComponent } from './names/names.component';
import { AngularComponent } from './angular/angular.component'
import { NamesService } from './names/names.service';
import { ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavComponent,
    EmailComponent,
    HomeComponent,
    NamesComponent,
    AngularComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'email/:names', component:NamesComponent},
      {path:'names' , component: NamesComponent },
      {path:'email' , component:EmailComponent},
      {path:'pics' , component:ProfileComponent},
      {path:'' , component:AngularComponent},
      {path:'user' , component:UserComponent , canActivate:[Authguard]}        
    ])
  ],
  providers: [
    AuthService,
    AppServiceService,
    ProfileService,
    EmailService,
    NamesService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    Authguard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
