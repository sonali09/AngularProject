import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  @Input() reqGroup:string;
  @Input() reqDate:Date;
  @Input() reqLoc:string;
  show= false;
  @Output() response:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendRes(){
    this.response.emit('10 Donors');
    this.show = true;
  }

}
