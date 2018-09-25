import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css']
})
export class FormRegistrationComponent implements OnInit {
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
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  registrate() {
    const data = {
      email: this.model.email,
      password: this.model.password
    };
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    this.authService
      .registrate(data)
      .subscribe(response => (this.response = response));
  }
}
