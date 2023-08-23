import { Component } from '@angular/core';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.scss']
})

export class PdfGeneratorComponent {
  generatePDF() {
    const doc = new jsPDF();
    doc.text('Hello, this is a PDF!', 10, 10);
    doc.save('example.pdf');
  }
}
