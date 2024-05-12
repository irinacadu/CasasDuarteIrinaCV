import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import { Canvas, Line, Txt } from 'pdfmake-wrapper';
import { FormatDescriptionPipe } from 'src/pipes/format-text-pipe';
import { CvPdf } from '../../interfaces/cv-pdf';

@Component({
  selector: 'app-extract-data-for-pdf',
  standalone: true,
  imports: [],
  templateUrl: './extract-data-for-pdf.component.html',
  styleUrl: './extract-data-for-pdf.component.scss',
})
export class ExtractDataForPdfComponent {
  constructor(private formatText: FormatDescriptionPipe) {}
  getAboutMeForPdf(cvPdf: CvPdf): CvPdf[] {
 

    const aboutMe = [];
    const formattedAboutMe = this.formatText.formatDescription(
      cvPdf.aboutMeContent
    );
    aboutMe.push(
      new Txt(formattedAboutMe)
        .font('NewsCycle')
        .fontSize(10)
        .width(399)
        .color('#f4f7f8')
        .alignment('justify').end
    );
    return aboutMe;
  }

  getPersonalDataforPdf(cvPdf: CvPdf): CvPdf[] {
    const personalData = [];
    personalData.push(
      new Txt(cvPdf.firstName + ' ' + cvPdf.lastName)
        .font('BebasNeue')
        .fontSize(22)
        .color('#f02c77').end,
      new Txt(cvPdf.job)
        .font('BebasNeue')
        .fontSize(14)
        .characterSpacing(0.5)
        .color('#f4f7f8').end,
      // new Txt('\n' ).end,
      new Txt(cvPdf.dataContact.phone)
        .font('BebasNeue')
        .fontSize(12)
        .characterSpacing(0.5)
        .color('#bbbbbb').end,

      new Txt(cvPdf.dataContact.mail)
        .font('NewsCycle')
        .fontSize(10)
        .color('#bbbbbb').end,

      new Txt('GitHub')
        .link(cvPdf.dataContact.gitHubUrl)
        .font('BebasNeue')
        .fontSize(12)
        .characterSpacing(0.5)
        .color('#69d6d1').end,

      new Txt('LinkedIn')
        .link(cvPdf.dataContact.linkedInkUrl)
        .font('BebasNeue')
        .fontSize(12)
        .characterSpacing(0.5)
        .color('#69d6d1').end,
      new Txt('\n').end
    );

    return personalData;
  }

  getWorkExperienceForPdf(cvPdf: CvPdf): CvPdf[] {
    const workExperiences = [];
    cvPdf.workExperience.forEach((workExperience) => {
      const formatedWorkExp = this.formatText.formatDescription(
        workExperience.description
      );
      workExperiences.push(
        new Txt(workExperience.date)
          .font('BebasNeue')
          .fontSize(10)
          .alignment('left')
          .color('#000707').end,

        new Txt(workExperience.enterprise)
          .font('NewsCycle')
          .fontSize(9)
          .alignment('left')
          .color('#555555').end,

        new Txt(workExperience.jobTitle)
          .font('NewsCycle')
          .fontSize(10)
          .alignment('left')
          .color('#202020').end,

        new Txt(workExperience.functions)
          .font('NewsCycle')
          .fontSize(10)
          .color('#fa005c')
          .alignment('left')
         .end,

        new Txt(formatedWorkExp)
          .font('NewsCycle')
          .fontSize(11)
          .alignment('justify').end,

        new Txt(workExperience.technologies)
          .font('NewsCycle')
          .fontSize(10)
          .alignment('center')
          .bold()
          .color('#fa005c').end,

        new Txt('\n').end
      );
    });

    return workExperiences;
  }

  getEducationForPdf(cvPdf: CvPdf): CvPdf[] {
    const educations = [];
    let lineBreak =    new Txt('\n').end;
    cvPdf.education.forEach((education) => {
      educations.push(
        new Txt(education.dateEd)
          .font('BebasNeue')
          .fontSize(10)
          .alignment('left')
          
          .color('#555555').end,

        new Txt(education.place)
          .font('BebasNeue')
          .fontSize(10)
          .alignment('left')
       
          .color('#202020').end,

        new Txt(education.descriptionEd)
          .font('BebasNeue')
          .fontSize(10)
          .color('#0d746e')
          .alignment('left')
        
          .end,
          lineBreak
         
      );

    });
    lineBreak
    return educations;
  }

  getSoftSkillsForPdf(cvPdf: CvPdf): CvPdf[] {
    const softSkills = [];
      let lineBreak =    new Txt('\n').end;
    cvPdf.skillsSoft.forEach((softSkill) => {
      softSkills.push(
        new Txt(softSkill.soft)
          .font('BebasNeue')
          .fontSize(10)
          .alignment('left')
          .color('#000707').end,
       );
    });
    softSkills.push(lineBreak)

    return softSkills;
  }
  getHardtSkillsForPdf(cvPdf: CvPdf): CvPdf[] {
    const hardSkills = [];
    cvPdf.skillsHard.forEach((hardSkill) => {
      hardSkills.push(     
        new Txt(hardSkill.hard)
          .font('BebasNeue')
          .fontSize(10)
          .alignment('left')
          .color('#000707').end,
         
      );
    });
    return hardSkills;
  }

  getskillsAndEducationForPdf(cvPdf: CvPdf): CvPdf[] {
    const skills = [];
    let softTitle = new Txt('Soft') .font('BebasNeue').fontSize(14).end
    let hardTitle = new Txt('Hard') .font('BebasNeue').fontSize(14).end
    let educationTitle =  new Txt(cvPdf.educationTitle)
                                        .font('BebasNeue')
                                        .fontSize(16)
                                        .color('#f02c77')
                                        .end;

    let lineBreak =    new Txt('\n').end;
 
    skills.push(hardTitle)
    skills.push(this.getHardtSkillsForPdf(cvPdf));
    skills.push(lineBreak)
    skills.push(softTitle)
    skills.push(this.getSoftSkillsForPdf(cvPdf));
    skills.push(lineBreak)  
    skills.push(educationTitle)  
    skills.push(this.getEducationForPdf(cvPdf)  )

    return skills;
  }
}
