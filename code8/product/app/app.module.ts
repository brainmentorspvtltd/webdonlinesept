import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './productlist/product/product.component';
import {ProductService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsearchComponent,
    ProductlistComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
