import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'irinaCasasDuarte';

  selectedLanguage: string = 'english';




  constructor(private meta: Meta) {}

  // ngOnInit() {


  //   this.meta.addTag({
  //     name: 'og:image',
  //     content: 'assets/ogimg.jpg'
  //   });
  // }

  onLanguageChanged(language: string) {
    this.selectedLanguage = language;
  }
}
