import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertService } from '../service/alert-service.service';

@Component({
  selector: 'app-form-login',
  styleUrls: ['./form-login.component.css'],
  templateUrl: 'form-login.component.html'
})
export class FormLoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }

  login(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService
      .login(this.registerForm.value.email, this.registerForm.value.password)
      .subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error(error);
        }
      );
  }
}
