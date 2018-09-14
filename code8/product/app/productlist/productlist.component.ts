import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../models/Product';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @Input()
   productlist:Product[];
  constructor() { }

  ngOnInit() {
  }

}
