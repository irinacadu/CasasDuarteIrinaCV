import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './pages/header/header.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormatDescriptionPipe } from 'src/pipes/format-text-pipe';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './pages/footer/footer.component';
import { PdfGeneratorComponent } from './pages/pdf-generator/pdf-generator.component';
import { ContactDialogComponent } from './pages/contact-dialog/contact-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkExperienceContentComponent } from './pages/content/work-experience-content/work-experience-content.component';
import { AboutMeContentComponent } from './pages/content/about-me-content/about-me-content.component';
import { PpoDevFunctionsContentComponent } from './pages/content/ppo-dev-functions-content/ppo-dev-functions-content.component';
import { OtherWorkExperienceContentComponent } from './pages/content/other-work-experience-content/other-work-experience-content.component';
import { EducationContentComponent } from './pages/content/education-content/education-content.component';
import { SkillsContentComponent } from './pages/content/skills-content/skills-content.component';
import { InterestsContentComponent } from './pages/content/interests-content/interests-content.component';
import { PersonalProjectsContentComponent } from './pages/content/personal-projects-content/personal-projects-content.component';
import { LineJumpingPipe } from 'src/pipes/line-jumping-pipe';
import { HeaderContentComponent } from './pages/content/header-content/header-content.component';
import { ExistingPdfComponent } from './pages/content/existing-pdf/existing-pdf.component';
import { DigitalGardenComponent } from './pages/digital-garden/digital-garden.component';
import { ExtractDataForPdfComponent } from './pages/classes/extract-data-for-pdf/extract-data-for-pdf.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    PrincipalComponent,
    FormatDescriptionPipe,
    FooterComponent,
    PdfGeneratorComponent,
    ContactDialogComponent,
    WorkExperienceContentComponent,
    AboutMeContentComponent,
    PpoDevFunctionsContentComponent,
    OtherWorkExperienceContentComponent,
    EducationContentComponent,
    SkillsContentComponent,
    InterestsContentComponent,
    PersonalProjectsContentComponent,
    LineJumpingPipe,
    HeaderContentComponent,
    ExistingPdfComponent,
    DigitalGardenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    
   
  ],
  providers: [
    FormatDescriptionPipe,
    ExtractDataForPdfComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
