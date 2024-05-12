import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PdfGeneratorService } from '../services/pdf-generator.service';

import { AboutMeContentComponent } from '../content/about-me-content/about-me-content.component';
import { WorkExperienceContentComponent } from '../content/work-experience-content/work-experience-content.component';
import { EducationContentComponent } from '../content/education-content/education-content.component';
import { InterestsContentComponent } from '../content/interests-content/interests-content.component';
import { PersonalProjectsContentComponent } from '../content/personal-projects-content/personal-projects-content.component';
import { SkillsContentComponent } from '../content/skills-content/skills-content.component';
import { WorkExperience } from '../interfaces/work-experience';
import { Education } from '../interfaces/education';
import { Skills } from '../interfaces/skills';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { ExistingPdfComponent } from '../content/existing-pdf/existing-pdf.component';
import { HttpClient } from '@angular/common/http';
import { CvPdf } from '../interfaces/cv-pdf';
import { DataContact } from '../interfaces/data-contact';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss','./principal-responsive.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1, display: 'block' })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('visible <=> hidden', animate('0.3s ease')),
    ]),
  ]
})
export class PrincipalComponent {
[x: string]: any;
  isAboutMeVisible = false;
  isAboutMeTransformed = false;

  isWorkExpVisible = false;
  isWorkExpTransformed = false;

  isEducationVisible = false;
  isEducationTransformed = false;

  isSkillsVisible = false;
  isSkillsTransformed = false;

  isInterestVisible= false;
  isInterestTransformed = false;

  isPersonalProjectVisible = false;
  isPersonalProjectTransformed = false;

  @Input() selectedLanguage: string = 'english';
  
  aboutMeContentComponent: AboutMeContentComponent = new AboutMeContentComponent();
  workExperienceContentComponent: WorkExperienceContentComponent = new WorkExperienceContentComponent();
  educationContentComponent: EducationContentComponent = new EducationContentComponent();
  skillsContentComponent: SkillsContentComponent = new SkillsContentComponent();
  interestsContentComponent: InterestsContentComponent = new InterestsContentComponent();
  personalProjectsContentComponent: PersonalProjectsContentComponent = new PersonalProjectsContentComponent();
  dataContact:DataContact={
    phone:'+34 638 207 725',
    mail:'irina_cadu@outlook.com',
    gitHubUrl:'https://github.com/irinacadu',
    linkedInkUrl:'https://www.linkedin.com/in/irina-casas-duarte/'
  }
cvPdf:CvPdf={
  profileImg:'',
    firstName:'',
    lastName:'',
    dataContact:{
      phone:'',
      mail:'',
      gitHubUrl:'',
      linkedInkUrl:''
    },
    aboutMeTitle : '',
    aboutMeContent: '',
    workExperienceTitle: '',
    workExperience: [],
    educationTitle:'',
    education: [],
    skillsTitle:'',
    skillsSoft:[],
    skillsHard:[]
}

  constructor(private dataService: DataService) {}

  getDataForPdf(){
    this.cvPdf.firstName='Irina';
    this.cvPdf.lastName='Casas';

    this.cvPdf.dataContact= this.dataContact;

    this.cvPdf.job='Fullstack Dev'
    this.cvPdf.aboutMeTitle=this.getAboutMeTitleContent();
    this.cvPdf.aboutMeContent=this.getAboutMeContent();

    this.cvPdf.workExperienceTitle=this.getWorkExperienceTitleContent();
    this.cvPdf.workExperience= this.getWorkExperienceContent();

    this.cvPdf.educationTitle = this.getEducationTitleContent();
    this.cvPdf.education = this.getEducationContent();

    this.cvPdf.skillsTitle=this.getSkillsTitleContent();
    this.cvPdf.skillsSoft=this.getSoftSkillsContent();
    this.cvPdf.skillsHard=this.getHardSkillsContent();

    
    

    this.dataService.generatePdf(this.cvPdf);



  }


  //TOGGLE [...] CHANGE
  toggleAboutMeChange() {
    this.isAboutMeVisible = !this.isAboutMeVisible;
    this.isAboutMeTransformed = !this.isAboutMeTransformed;
  }

  toggleWorkExpChange() {
    this.isWorkExpVisible = !this.isWorkExpVisible;
    this.isWorkExpTransformed = !this.isWorkExpTransformed;
  }

  toggleEducationChange() {
    this.isEducationVisible = !this.isEducationVisible;
    this.isEducationTransformed = !this.isEducationTransformed;
  };

  toggleSkillsChange() {
    this.isSkillsVisible = !this.isSkillsVisible;
    this.isSkillsTransformed = !this.isSkillsTransformed;
  };

  toggleInterestChange() {
    this.isPersonalProjectVisible = !this.isPersonalProjectVisible;
    this.isInterestTransformed = !this.isInterestTransformed;
  };

  togglePersonalProjectChange() {
    this.isPersonalProjectVisible = !this.isSkillsVisible;
    this.isPersonalProjectTransformed = !this.isPersonalProjectTransformed;
  };

 
  //PDF GENERATOR - CALL SERVICE
  generatePPOPdf() {
    // const aboutMeTitle = this.contentByLanguageAboutMeTitle[this.selectedLanguage];
    // const aboutMeDescription = this.contentByLanguageAboutMe[this.selectedLanguage];
    // const workExperienceTitle = this.contentByLanguageWorkExpTitle[this.selectedLanguage];
    // const devWorkExp = this.contentByLanguageDevWorkExp[this.selectedLanguage];
    // const devFunctions = this.contentByLanguagePpoDevFunctions[this.selectedLanguage];
    // const travelWorkExp = this.contentByLanguageTravelWorkExp[this.selectedLanguage];
    // this.pdfGeneratorService.generateWorkPPOExperiencePdf(aboutMeTitle, aboutMeDescription, devWorkExp, devFunctions, travelWorkExp, this.selectedLanguage);
  }

  getSegments(text: string): string[] {
    return text.split('**');
  }

  //SEE CONTENT->ABOOUT-ME-CONTENT
  getAboutMeTitleContent(): string {
    return this.aboutMeContentComponent.contentByLanguageAboutMeTitle[this.selectedLanguage];
  }

  getAboutMeContent(): string {
    return this.aboutMeContentComponent.contentByLanguageAboutMe[this.selectedLanguage];
  }

  //SEE CONTENT->WORK-EXPERIENCE-CONTENT
  getWorkExperienceTitleContent(): string {
   
    return this.workExperienceContentComponent.contentByLanguageWorkExpTitle[this.selectedLanguage];
  }

  getWorkExperienceContent(): WorkExperience[] {
  
    return this.workExperienceContentComponent.contentByLanguageDevWorkExp[this.selectedLanguage] ;
  }

  //SEE CONTENT->EDUCATION-CONTENT
  getEducationTitleContent(): string {
    return this.educationContentComponent.contentByLanguageEducationTitle[this.selectedLanguage];
  }

  getEducationContent(): Education[] {
    return this.educationContentComponent.contentByLanguageDevEducation[this.selectedLanguage];
  }
 
  //SEE CONTENT->SKILLS-CONTENT
  getSkillsTitleContent(): string {
    return this.skillsContentComponent.contentByLanguageSkillsTitle[this.selectedLanguage];
  }
  getTypeSkillsContent(): Skills {
    return this.skillsContentComponent.contentByLanguageSkillsType[this.selectedLanguage];
  }
  getSoftSkillsContent(): Skills[] {
    return this.skillsContentComponent.contentByLanguageSkillsSoft[this.selectedLanguage];
  }

  getHardSkillsContent(): Skills[] {
    return this.skillsContentComponent.contentByLanguageSkillsHard[this.selectedLanguage];
  }

  //SEE CONTENT->INTERESTS-CONTENT
  getInterestsTitleContent(): string {
    return this.interestsContentComponent.contentByLanguageInterestTitle[this.selectedLanguage];
  }

  // getInterestsContent(): string {
  // }

    //SEE CONTENT->PERSONAL-PROJECTS-CONTENT
    getPersonalProjectsTitleContent(): string {
      return this.personalProjectsContentComponent.contentByLanguagePersonalProjectsTitle[this.selectedLanguage];
    }
  
    // getPersonalProjectsContent(): string {
    // }

  }