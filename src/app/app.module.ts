import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatMenuModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateService } from './service/translate.service';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormRegistrationComponent } from './form-registration/form-registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './auth-guard/auth-guard.component';
import { AlertComponent } from './alert-component/alert-component.directive';
import { AlertService } from './service/alert-service.service';
import { UserService } from './service/user.service';
import { TranslatePipe } from './translate.pipe';

// export function setupTranslateFactory(service: TranslateService): Function {
//   return () => service.use('ru');
// }

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormRegistrationComponent,
    MainPageComponent,
    AlertComponent,
    TranslatePipe
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule],
  providers: [AuthGuard,
    AlertService,
    TranslateService,
    UserService,
  //   {
  //   provide: APP_INITIALIZER,
  //   useFactory: setupTranslateFactory,
  //   deps: [ TranslateService ],
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
