import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-existing-pdf',
  templateUrl: './existing-pdf.component.html',
  styleUrls: ['./existing-pdf.component.scss']
})
export class ExistingPdfComponent {

  constructor(private http:HttpClient) {}
  
  getArchivo(){
    const url = `./assets/tu-subcarpeta/casasDuarteIrina_EN.pdf`;
    
    this.http.get(url, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const blob = new Blob([data]);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'casasDuarteIrina_EN.pdf';
        link.click();
      });
  }

}
