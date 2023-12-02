import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-projects-content',
  templateUrl: './personal-projects-content.component.html',
  styleUrls: ['./personal-projects-content.component.scss']
})
export class PersonalProjectsContentComponent {

  contentByLanguagePersonalProjectsTitle:{ [key: string]: string } ={
    english: 'PERSONAL PROJECTS',
    castellano:'PROYECTOS PERSONALES' ,
    catala:'PROJECTES PERSONALS'   
  };

  
}
