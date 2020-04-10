import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Event} from '../Event'

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css']
})
export class TimelineItemComponent implements OnInit {

  @Input("event")
  event: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
