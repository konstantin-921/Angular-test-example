import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormRegistrationComponent } from './form-registration/form-registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './auth-guard/auth-guard.component';
import { AlertComponent } from './alert-component/alert-component.directive';
import { AlertService } from './service/alert-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormRegistrationComponent,
    MainPageComponent,
    AlertComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
