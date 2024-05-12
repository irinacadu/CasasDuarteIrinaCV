import { Component } from '@angular/core';
import { Header } from '../../interfaces/header';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss']
})
export class HeaderContentComponent {


  selectByLanguage: { [key: string]: Header[] } = {
    english: [
      {
        language: 'English (B2)',
        value: 'english'
      },
      {
        language: 'Spanish (native)',
        value: 'castellano'
      },
      {
        language: 'Catalan (bilingual)',
        value: 'catala'
      }


    ],
    castellano: [{
      language: 'Inglés (B2)',
      value: 'english'
    },
    {
      language: 'Castellano (nativa)',
      value: 'castellano'
    },
    {
      language: 'Catalán (bilingüe)',
      value: 'catala'
    }
    ],

    catala: [{
      language: 'Anglès (B2)',
      value: 'english'
    },
    {
      language: 'Castellà (native)',
      value: 'castellano'
    },
    {
      language: 'Català (bilingüe)',
      value: 'catala'
    }

    ]

  }

  contactMeByLanguage: { [key: string]: string } = {
    english: 'CONTACT',
    castellano: 'CONTACTO',
    catala: 'CONTACTE'
  }

  selectTitleByLanguage: { [key: string]: string } = {
    english: 'Language',
    castellano: 'Lenguaje',
    catala: 'Llenguatge'
  }

  selectJobByLanguage: { [key: string]: string } = {
    english: 'FullStack Dev',
    castellano: 'FullStack Dev',
    catala: 'FullStack Dev'
  }
}
