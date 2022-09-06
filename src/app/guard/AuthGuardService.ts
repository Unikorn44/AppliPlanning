import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/AuthService";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
    if(localStorage.getItem("tokenBaerer")) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
