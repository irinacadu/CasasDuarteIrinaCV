import { Injectable } from '@angular/core';
import { CvPdf } from '../interfaces/cv-pdf';

import 'pdfmake/build/vfs_fonts';
// import * as pdfMake from 'pdfmake/build/pdfmake';
// import { ContentText } from 'pdfmake/interfaces';
// import {pdfMake} from 'pdfmake/build/pdfmake';
// import {pdfFonts} from 'pdfmake/build/vfs_fonts';
pdfMake.vfs=pdfFonts.pdfMake.vfs;


@Injectable({
  providedIn: 'root'
})
export class DataService { 



  
  constructor() { }




  // Método para generar el PDF del CV
  generatePdf(cvPdf:CvPdf) {

    const docDefinition = {
      content: [
        cvPdf.aboutMeTitle,
        cvPdf.aboutMeContent
        // {
        //   text: 'Experience',
        //   fontSize: 16,
        //   bold: true,
        //   margin: [0, 20, 0, 0] // Add margin after heading
        // },
        // Loop through cvPdf.experience array and create content for each entry
        // ...cvPdf.workExperience.map(exp => ({
        //   text: `${exp.enterprise} - ${exp.date}` as,
        //   fontSize: 12,
        //   margin: [0, 5, 0, 0] // Add margin for each experience entry
        // }))
      ]
    };
  
    pdfMake.createPdf(docDefinition).download('cvIrinaCasasDuarte.pdf');
  }

    // doc.save('cvIrinaCasasDuarte.pdf');
  


}
