import { Component, OnInit } from '@angular/core';
import { Camp } from '../camp';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
  upcoming:Camp[];
  constructor() { }

  ngOnInit() {
    this.upcoming = [new Camp('Hyderabad', new Date(2018,7,15),7700),
    new Camp('Hyderabad', new Date(2018,8,23),7500),
    new Camp('Mathura', new Date(2018,8,21),7540),
    new Camp('Chennai', new Date(2018,9,20),7350)];
  }

}
