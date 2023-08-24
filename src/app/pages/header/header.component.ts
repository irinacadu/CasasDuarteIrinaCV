import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() languageChanged = new EventEmitter<string>();

  changeLanguage(language: string) {
    this.languageChanged.emit(language);
  }
  isLanguageChanged = false;
  selectedLanguage: string = 'english';
  toggleAboutMeChange() {
    debugger;
    
    this.isLanguageChanged = !this.isLanguageChanged;

   
  }

 
  selectByLanguage:{ [key: string]: string } ={    
    english: 'English (B2)',
    castellano: 'Inglés (B2)',
    catala: ' Anglès (B2)'
  }
}
