import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linejumping'
})

export class LineJumpingPipe implements PipeTransform{
    transform(value: string): string {
        let transformedValue = value.replace(/(\n)/g, '<br/><br/>');
        transformedValue = transformedValue.replace(/(?<!\*)\*\*(.*?)\*\*/g, '<span class="bold-text">$1</span>');
        // Agrega más reemplazos según sea necesario
  
        return transformedValue;
    }
 
}
