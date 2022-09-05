import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService, private router:Router) {
    this.form = this.fb.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public login(): void {
    const val = this.form.value;
    if(val.identifiant && val.password) {
      this.authService.login(val.identifiant, val.password);
      this.router.navigateByUrl('/accueil');
    };
  }

}
