import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  styleUrls: ['./form-login.component.css'],
  templateUrl: 'form-login.component.html'
})
export class FormLoginComponent implements OnInit {

  profileForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['home'] || '/';
  }

  login() {
    this.authService
      .login(this.profileForm.value.email, this.profileForm.value.password)
      .subscribe(() => this.router.navigate(['/']));
  }
}
