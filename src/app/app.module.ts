import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HeaderComponent } from './pages/header/header.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// o
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HeaderComponent,
    PrincipalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatExpansionModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
