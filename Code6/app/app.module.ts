import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { ChildComponent } from './child/Child.component';
import { Child2Component } from './child2/child2.component';
import { GreetComponent } from './greet/greet.component';
import { GreetService } from './services/greet.service';

@NgModule({
  declarations: [
    AppComponent,ChildComponent, Child2Component, GreetComponent
  ],
  imports: [
 

  BrowserModule
  ],
  providers: [GreetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
