import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/databaseTemplate/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public loginDisplay: boolean = true;
  public adminDisplay: boolean = true;

  public firstName: string = localStorage.getItem('firstName') || '';
  public lastName: string = localStorage.getItem('lastName') || '';

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('tokenBaerer') != null) {
      this.loginDisplay = false;
    }
    if (localStorage.getItem('admin') == "true") {
      this.adminDisplay = false;
    }
  }

  logOut() {
    this.authService.logout();
    if (localStorage.getItem('tokenBaerer') != null) {
      this.loginDisplay = false;
    } else {
      this.router.navigateByUrl('/');
    }
  }

  homeDirection() {
    this.router.navigateByUrl('/home');
  }

  welcomeDirection() {
    this.router.navigateByUrl('/accueil');
  }

  adminDirections() {
    window.open("http://localhost:8080/Jpa/pageadmin", "_blank");
  }


}
