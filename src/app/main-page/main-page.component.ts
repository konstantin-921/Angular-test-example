import { Component, OnInit } from '@angular/core';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  faUser: IconDefinition = faUser;
  name: string = 'currentUser';

  constructor() { }

  ngOnInit() {}

  changeLanguage() {
    console.log('Language changed!');
    
  }

}
