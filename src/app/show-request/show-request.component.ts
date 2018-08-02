import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '../../../node_modules/@angular/core/src/di/injector';

@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {
  availBG=['O+', 'O-','B+','B-','A-','A+','AB'];
  rGrp:string;
  loc:string;
  rDate:Date;
  res:string;
  constructor() { }

  ngOnInit() {
  }

  onChange(chileRes:string){
    this.res = chileRes;
  }
}
