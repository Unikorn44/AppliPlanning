import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/AuthService";

export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
    return true;
  }
}
