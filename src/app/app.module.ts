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
@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    PrincipalComponent,
    FormatDescriptionPipe,
    FooterComponent,
    PdfGeneratorComponent,
    ContactDialogComponent
    
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
