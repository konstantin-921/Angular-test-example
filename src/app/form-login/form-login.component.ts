import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  styleUrls: ['./form-login.component.css'],
  templateUrl: 'form-login.component.html'
})
export class FormLoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }

  login() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService
      .login(this.registerForm.value.email, this.registerForm.value.password)
      .subscribe(() => this.router.navigate(['/']));
  }
}
