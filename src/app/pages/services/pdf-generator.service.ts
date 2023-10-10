import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() { }


  @Injectable({
    providedIn: 'root'
  })


  generateWorkPPOExperiencePdf(aboutMeTitle: string, aboutMeDescription:any, devWorkExp: any, devFunctions: any, travelWorkExp: any, selectedLanguage: string) {
   
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
  
    let yOffset = 10;
    let xOffset = 10;
    const pageWidth = doc.internal.pageSize.getWidth(); 
    const contentWidth = pageWidth - 2 * xOffset; 
  
    // ABOUT ME
    const aboutLines = doc.splitTextToSize(aboutMeTitle, contentWidth);    
    const aboutMe = doc.splitTextToSize(aboutMeDescription, contentWidth);

    doc.setFontSize(14);
    doc.setFont('bold');
    doc.setFont('Helvetica');
    doc.setTextColor(105, 214, 209);
  
    for (let i = 0; i < aboutLines.length; i++) {
      const aboutLine = aboutLines[i];
      doc.text(aboutLine, xOffset, yOffset);
      yOffset +=4;
    }

   doc.setTextColor(0, 0, 0);
   doc.setFontSize(10);
   doc.setFont('Helvetica');
 
    for (let i = 0; i < aboutMe.length; i++) {
      const aboutMes = aboutMe[i].replace(/\*\*/g, ' ');
      doc.text(aboutMes, xOffset, yOffset);
      yOffset +=5;
    }
    yOffset +=5;
    // yOffset += 10; 
    debugger
    // DEV WORK EXPERIENCE
    doc.setFontSize(10);
    doc.setFont('Helvetica');
    let devDate;
    let devDesc;
    let devJobTitle;
    let devEnterprise;

    let enterprise;
    let date;
    let jobTitle;
    let description;
    for(let i = 0; i<devWorkExp.length;i++){
        enterprise = devWorkExp[i].project1[i].enterprise;
        date = devWorkExp[i].project1[i].date;
        jobTitle = devWorkExp[i].project1[i].jobTitle;
        description = devWorkExp[i].project1[i].description;

        devEnterprise=  doc.splitTextToSize(enterprise, contentWidth -5);
        devDate = doc.splitTextToSize(date, contentWidth -5);
        devJobTitle= doc.splitTextToSize(jobTitle, contentWidth -5);
        devDesc = doc.splitTextToSize(description, contentWidth -5);
     
     
    }

 
    const contentWidthPPO = (pageWidth - 2 * xOffset - 3) / 2;
    const contentWidthDev = (pageWidth - 2 * xOffset - 7) / 2;

    const columnWidth = 50;
    const rowHeight = 5;
   

   doc.text(enterprise, xOffset, yOffset); 
   yOffset += 4; 
   doc.text(devDate, xOffset, yOffset);
   yOffset += 4; 
   doc.text(jobTitle, xOffset, yOffset); 
   yOffset += 6; 
 
    for (let i = 0; i < Math.max(devDesc.length, devDesc.length); i++) {   
      const descriptionLine = devDesc[i] || '';  
      doc.text(descriptionLine, xOffset , yOffset);  
      yOffset += 5; 
    }
  
    yOffset += 2; 
    xOffset += 5; 
    doc.text('PPO', xOffset, yOffset);   
    xOffset += 98; 
    doc.text('FULLSTACK', xOffset, yOffset);
    
    yOffset += 6; 
    xOffset = 10;
   
  
    for (let i = 0; i < Math.max(devFunctions.length); i++) {
  
      const functionLine = devFunctions[i] || '';
      
      const splittedDescriptionPPO = doc.splitTextToSize(functionLine.ppo, contentWidthPPO -9 );    
      const splittedDescriptionDev = doc.splitTextToSize(functionLine.dev, contentWidthDev -9);
   
      yOffset += rowHeight-3;
      const maxLines = Math.max(splittedDescriptionPPO.length);
  
      for (let j = 0; j < maxLines; j++) {
        const linePPO = splittedDescriptionPPO[j] || '';
        const lineDev = splittedDescriptionDev[j] || '';
  
        doc.text(linePPO, xOffset+5 , yOffset);
        doc.text(lineDev, contentWidthPPO +20, yOffset);

       
        yOffset +=3.5;
  
       
      }
     
    }

  

   

  
    doc.save('CV_' + selectedLanguage + '_IrinaCasasDuarte.pdf');
  }
  
}


