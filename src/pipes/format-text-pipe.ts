import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDescription'
})
export class FormatDescriptionPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\*\*(.*?)\*\*/g, '<span class="bold-text">$1</span>');
  }

  formatDescription(text: string): any[] {
    const parts = text.split("**"); // Separar el texto por '**'
    const formattedParts = [];
  
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        formattedParts.push({ text: parts[i] }); 
      } else {
        formattedParts.push({ text: parts[i], bold: true,  transform: 'uppercase' }); 
      }
    }
  
    return formattedParts;
  }
 
}
