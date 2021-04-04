import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
