import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { PrintComponent } from './print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    PrintComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
