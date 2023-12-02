import { Component } from '@angular/core';
import { Education } from '../../interfaces/education';

@Component({
  selector: 'app-education-content',
  templateUrl: './education-content.component.html',
  styleUrls: ['./education-content.component.scss']
})
export class EducationContentComponent {

  contentByLanguageEducationTitle: { [key: string]: string } = {
    english: 'EDUCATION',
    castellano: 'FORMACIÓN',
    catala: 'FORMACIÓ'
  };
  contentByLanguageDevEducation: { [key: string]: Education[] } = {
    english: [
      {
        dateEd: '2020-2023',
        descriptionEd: 'Senior Level Vocational Training in web development (MEC level 6)',
        place:'CEIFP Carlos III, Cartagena'
      },
      {
        dateEd: 'Jun22 – Sep22',
        descriptionEd: 'Bootcamp Java and Angular',
        place:'Capgemini'
      }
    ],

    castellano: [
      {
        dateEd: '2020-2023:',
        descriptionEd: 'CFGS de aplicaciones web',
        place:'CEIFP Carlos III, Cartagena'
      },
      {
        dateEd: 'Jun22 – Sep22',
        descriptionEd: 'Bootcamp Java y Angular',
        place:'Capgemini'
      }
    ],
    catala: [
      {
        dateEd: '2020-2023',
        descriptionEd: 'CFGS de desenvolupament d\'aplicacions web',
        place:'CEIFP Carlos III, Cartagena'
      },
      {
        dateEd: 'Jun22 – Sep22',
        descriptionEd: 'Bootcamp Java i Angular',
        place:'Capgemini'
      }
    ]
  };
  contentByLanguageTravelEducation: { [key: string]: any } = {
    english: {
      dateEd: '2014-2016:',
      descriptionEd: 'Senior Level Vocational Training in travel agencies and MICE (MEC level 6)'
    },
    castellano: {
      dateEd: '2014-2016:',
      descriptionEd: 'CFGS de agencias de viajes y organización de eventos. (IES La Flota, Murcia)'
    },
    catala: {}
  };
}
