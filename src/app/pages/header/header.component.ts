import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { HeaderContentComponent } from '../content/header-content/header-content.component';
import { Header } from '../interfaces/header';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: any;
  @ViewChild(MatAccordion)accordion!: MatAccordion;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    this.menu.nativeElement.addEventListener('click', this.toggleMenu);
  }

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
  
  toggleMenu() {
    if (this.menu.nativeElement.classList.contains('show-menu')) {
      this.menu.nativeElement.classList.remove('show-menu');
    } else {
      this.menu.nativeElement.classList.add('show-menu');
    }
  }
}



