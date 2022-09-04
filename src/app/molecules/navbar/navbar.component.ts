import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public loginDisplay = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout();
    if (this.authService.log == false) {
      this.loginDisplay = true;
      this.router.navigateByUrl('/');
    }
  }
}
