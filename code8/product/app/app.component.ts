import { Component, OnInit } from '@angular/core';
import {Product} from './models/Product';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Product App';
  products:Product[] = [];
  constructor(private productService:ProductService){

  }
  ngOnInit(){
     this.productService.getDataFromServer().then(productArray=>{
       this.products = productArray;
       console.log("Data from server is ",this.products);
     })
  }
}
