import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegistrationComponent } from './form-registration/form-registration.component';
import { AuthGuard } from './auth-guard/auth-guard.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: FormLoginComponent },
  { path: 'registration', component: FormRegistrationComponent },
  { path: 'home', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
