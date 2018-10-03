import { Component, OnInit } from '@angular/core';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '../service/translate.service';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  faUser: IconDefinition = faUser;
  name: string = "currentUser";
  currentLang: string = 'en';


  constructor(private translate: TranslateService, private auth: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.currentLang = this.auth.language || 'en';
    this.translate.use(this.currentLang);
    this.userService
    .getUser()
    .subscribe(
      () => console.log('OOps'),
      // error => this.alertService.error(error)
    );
  }

  setLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  whatClassIsIt() {
    if(this.currentLang === "en")
      return "button-flag flag-icon flag-icon-us";
    else if(this.currentLang === "ru")
      return "button-flag flag-icon flag-icon-ru";
  }

}
