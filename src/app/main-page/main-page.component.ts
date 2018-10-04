import { Component, OnInit } from '@angular/core';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TranslateService } from '../service/translate.service';
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


  constructor(
    private translate: TranslateService,
    private userService: UserService,
    private router: Router) 
    {}

  ngOnInit() {
    this.userService
    .getUser()
    .subscribe(
      (user) => {
        this.currentLang = user.language || 'en';
        this.name = user.email;
        this.translate.use(this.currentLang);
      },
    );
  }

  logout = () => {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  setLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.userService.updateLanguage(lang).subscribe(() => console.log('Success update language!'))
  }

  whatClassIsIt() {
    if(this.currentLang === "en")
      return "button-flag flag-icon flag-icon-us";
    else if(this.currentLang === "ru")
      return "button-flag flag-icon flag-icon-ru";
  }

}
