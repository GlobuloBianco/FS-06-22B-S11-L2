import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroTDComponent } from './components/hero-td/hero-td.component';
import { HeroReactiveComponent } from './components/hero-reactive/hero-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroTDComponent,
    HeroReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
