import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { passValidator } from './custom-validators';
import { AlertService } from '../service/alert-service.service';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css']
})
export class FormRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPass: ['', [passValidator]]
    });
  }

  get f() { 
    return this.registerForm.controls;
  }

  registrate(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const data = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };
    this.authService
      .registrate(data)
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
          error => this.alertService.error(error),
      );
  }
}
