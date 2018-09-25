import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-form-login',
  styleUrls: ['./form-login.component.css'],
  templateUrl: 'form-login.component.html'
})
export class FormLoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  response: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['home'] || '/';
  }

  login() {
    this.authService
      .login(this.model.email, this.model.password)
      .subscribe(response => (this.response = this.router.navigate(['home'])));
  }
}
