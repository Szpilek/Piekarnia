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
  constructor() { }

  ngOnInit(): void {
  }

}
