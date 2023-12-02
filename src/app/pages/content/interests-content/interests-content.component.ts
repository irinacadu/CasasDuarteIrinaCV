import { Component } from '@angular/core';

@Component({
  selector: 'app-interests-content',
  templateUrl: './interests-content.component.html',
  styleUrls: ['./interests-content.component.scss']
})
export class InterestsContentComponent {

  contentByLanguageInterestTitle:{ [key: string]: string } ={
    english: 'INTERESTS',
    castellano:'INTERESES',
    catala:''    
  };

}
