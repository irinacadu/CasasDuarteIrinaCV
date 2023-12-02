import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { HeaderContentComponent } from '../content/header-content/header-content.component';
import { Header } from '../interfaces/header';


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
  headerContentComponent: HeaderContentComponent = new HeaderContentComponent();

  changeLanguage(language: string) {
    this.languageChanged.emit(language);
    this.updateHeaderContent(language);
  }
  isLanguageChanged = false;
  selectedLanguage: string = 'english';
  toggleAboutMeChange() {

    this.isLanguageChanged = !this.isLanguageChanged;


  }

  private updateHeaderContent(language: string) {
    this.selectedLanguage = language;
  }
  getContactMeContent(): string {
    return this.headerContentComponent.contactMeByLanguage[this.selectedLanguage];
  }
  getHeaderContent(): Header[] {
    return this.headerContentComponent.selectByLanguage[this.selectedLanguage];
  }
  getTitleContent(): string {
    return this.headerContentComponent.selectTitleByLanguage[this.selectedLanguage];
  }

  getJobContent(): string {
    return this.headerContentComponent.selectJobByLanguage[this.selectedLanguage];
  }
  
  
}
