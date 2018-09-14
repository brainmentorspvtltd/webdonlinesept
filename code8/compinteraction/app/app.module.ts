import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { PrintComponent } from './print/print.component';
import { Child2Component } from './child2/child2.component';
import {SharedService} from './services/shared.service';
import { SecondModule } from './second.module';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    PrintComponent

  ],
  imports: [
    BrowserModule,SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
