import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'irinaCasasDuarte';

  selectedLanguage: string = 'english';

  onLanguageChanged(language: string) {
    this.selectedLanguage = language;
  }
}
