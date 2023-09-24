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


  generateWorkPPOExperiencePdf(aboutMeTitle: string,aboutMeDescription:any, devWorkExp: any, devFunctions: any, travelWorkExp: any, selectedLanguage: string) {
   
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
  
    let yOffset = 10;
    const xOffset = 10;
    const pageWidth = doc.internal.pageSize.getWidth(); 
    const contentWidth = pageWidth - 2 * xOffset; 
   
  
    doc.setFontSize(18);
    doc.setFont('bold');
    doc.setFontSize(10);
    doc.setFont('Arial');
  
    // ABOUT ME
    const aboutLines = doc.splitTextToSize(aboutMeTitle, contentWidth);
  
    for (let i = 0; i < aboutLines.length; i++) {
      const aboutLine = aboutLines[i];
      doc.text(aboutLine, xOffset, yOffset);
      yOffset ++;
    }
  
    yOffset += 10; 
  debugger
    // DEV WORK EXPERIENCE
    // const dateDevLines = doc.splitTextToSize(devWorkExp, contentWidth -5);
    let devDate;
    let devDesc;

for(let i = 0; i<devWorkExp.project1.length;i++){
     let date = devWorkExp[i].project1.date;
     let description = devWorkExp[i].project1.description;

     devDate = doc.splitTextToSize(date, contentWidth -5);
     devDesc = doc.splitTextToSize(description, contentWidth -5);


}
    const descriptionDevLines = doc.splitTextToSize(devWorkExp.description, contentWidth -10);
    const contentWidthPPO = (pageWidth - 2 * xOffset - 3) / 2;
    const contentWidthDev = (pageWidth - 2 * xOffset - 7) / 2;

    const columnWidth = 50;
    const rowHeight = 5;
   
    doc.line(xOffset, yOffset + 5, xOffset + 3 * columnWidth, yOffset + 5);

    

    for (let i = 0; i < Math.max(devDate.length, devDesc.length); i++) {
      const dateLine = devDate[i] || '';  
      doc.text(dateLine, xOffset, yOffset);
      yOffset += 4; 
    }
    
  
    for (let i = 0; i < Math.max(devDesc.length, devDesc.length); i++) {   
      const descriptionLine = devDesc[i] || '';  
      doc.text(descriptionLine, xOffset , yOffset);  
      yOffset += 5; 
    }
  
    yOffset += 2; 

    doc.text('PPO', xOffset, yOffset);
 
  
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
        doc.text(lineDev, contentWidthPPO +17, yOffset);

       
        yOffset +=3.5;
  
       
      }
     
    }

  

   

  
    doc.save('CV_' + selectedLanguage + '_IrinaCasasDuarte.pdf');
  }
  
}


