import { Injectable, PipeTransform } from '@angular/core';
import { CvPdf } from '../interfaces/cv-pdf';

import * as pdfMake from 'pdfmake/build/pdfmake';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

import { FormatDescriptionPipe } from 'src/pipes/format-text-pipe';
import {
  Canvas,
  Columns,
  Item,
  Line,
  PdfMakeWrapper,
  Rect,
  Stack,
  Table,
  Txt,
  Ul,
} from 'pdfmake-wrapper';
import pdfFonts from 'src/assets/fonts/custom-fonts';
import { ExtractDataForPdfComponent } from '../classes/extract-data-for-pdf/extract-data-for-pdf.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private formatText: FormatDescriptionPipe,
    private dataExtractForPdf: ExtractDataForPdfComponent
  ) {}

  generatePdf(cvPdf: CvPdf) {
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');
    pdf.pageMargins([30, 10, 30, 10]);
    pdf.info({
      title: 'CV Irina Casas duarte',
      author: 'Irina Casas duarte',
      subject: 'CV Irina Casas duarte',
  });
  
    PdfMakeWrapper.setFonts(pdfFonts, {
      BebasNeue: {
        normal: 'BebasNeue-Regular.ttf',
        bold: '',
        italics: '',
        bolditalics: '',
      },
      NewsCycle: {
        normal: 'NewsCycle-Regular.ttf',
        bold: 'NewsCycle-Bold.ttf',
        italics: '',
        bolditalics: '',
      },
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Bold.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: '',
      },
    });
    const formattedAboutMe = this.formatText.formatDescription(
      cvPdf.aboutMeContent
    );

    pdf.add(
      new Columns([
        new Stack([
          new Txt('\n').lineHeight(0.5).end,
          this.dataExtractForPdf.getPersonalDataforPdf(cvPdf),
        ])
          .alignment('left')
          .width(100).end,

        pdf.add(
          new Canvas([
            new Rect(115.5, 125.5)
            .round(10)
              .color('#152427').end,
          ]).absolutePosition(-92, -110).end
        ),

        new Txt(formattedAboutMe)
          .font('NewsCycle')
          .fontSize(10)
          .width(399)
          .color('#f4f7f8')
          .alignment('justify').end,

        pdf.add(
          new Canvas([
            new Rect([115.5, 125.5], [425, 125.5])
              .round(10)
              .color('#555555').end,
          ]).absolutePosition(35, -120).end
        ),
      ]).columnGap(17).end
    );
    pdf.add(new Txt('\n' + '\n').end);

    pdf.add(
      new Table([
        [
          new Txt(cvPdf.skillsTitle)
            .font('BebasNeue')
            .fontSize(16)
            .color('#f02c77')
           .end,

          new Txt(cvPdf.workExperienceTitle)
            .font('BebasNeue')
            .fontSize(16)
            .color('#f02c77')
           .end,
        ],
        [
          this.dataExtractForPdf.getskillsAndEducationForPdf(cvPdf),
          this.dataExtractForPdf.getWorkExperienceForPdf(cvPdf),
        ],
      ])
        .widths([115, 413])
        .layout({
          defaultBorder: false,       
        }).end
    );

   
 

    pdf.create().download('cvCasasDuarteIrina');
  }
}
