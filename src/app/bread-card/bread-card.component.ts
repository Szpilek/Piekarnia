import { Component, OnInit, Input } from '@angular/core';
import {Bread} from '../Bread';
@Component({
  selector: 'app-bread-card',
  templateUrl: './bread-card.component.html',
  styleUrls: ['./bread-card.component.css']
})
export class BreadCardComponent implements OnInit {

  @Input("bread")
  bread: Bread;
  breadDetailsTitleId: string; 
  breadDetailsId: string; 

  constructor() { 
  }

  ngOnInit(): void {
    this.breadDetailsId = 'breadDetails' + this.bread.name;
    this.breadDetailsTitleId = 'breadDetailsTitle' + this.bread.name;
  }

}
