import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) { }

  openContactDialog() {
    const dialogRef = this.dialog.open(ContactDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  @Output() languageChanged = new EventEmitter<string>();

  changeLanguage(language: string) {
    this.languageChanged.emit(language);
  }
  isLanguageChanged = false;
  selectedLanguage: string = 'english';
  toggleAboutMeChange() {
    debugger;
    
    this.isLanguageChanged = !this.isLanguageChanged;

   
  }

 
  selectByLanguage:{ [key: string]: string } ={    
    english: 'English (B2)',
    castellano: 'Inglés (B2)',
    catala: ' Anglès (B2)'
  }




}
