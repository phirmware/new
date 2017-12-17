import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";

@Injectable()
export class Authguard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(["/home"]);
    return false;
  }

}



