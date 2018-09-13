import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  @Input()
  passSalaryDetails:Object={bs:'',ts:'',ns:''};
  constructor() { }

  ngOnInit() {
  }

}
