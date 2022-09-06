import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public loginDisplay: boolean = true;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('tokenBaerer') != null) {
      this.loginDisplay = false;
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
}
