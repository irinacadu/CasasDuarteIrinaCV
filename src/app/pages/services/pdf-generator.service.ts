import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() { }

  generatePDF(contentSections: Record<string, any>) {
    const doc = new jsPDF();
    let yOffset = 10;

    for (const section in contentSections) {
      const content = this.formatContent(contentSections[section]);
      doc.setFontSize(14);
      doc.text(section, 10, yOffset);
      doc.setFontSize(12);
      yOffset += 10;
      doc.text(content, 10, yOffset);
      yOffset += doc.splitTextToSize(content, 180).length * 10 + 10; // Adjust yOffset for multi-line content
    }

    doc.save('combined.pdf');
  }

  private formatContent(content: any): string {
    if (typeof content === 'string') {
      return content;
    } else if (Array.isArray(content)) {
      return content.map(item => this.formatContent(item)).join('\n');
    } else if (typeof content === 'object') {
      // Handle complex objects or structures here if needed
      // Return formatted content as a string
    }
    return '';
  }
}
