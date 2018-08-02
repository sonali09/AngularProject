import { Component, OnInit } from '@angular/core';
import { BloodReq } from '../blood-req';

@Component({
  selector: 'app-req-blood',
  templateUrl: './req-blood.component.html',
  styleUrls: ['./req-blood.component.css']
})
export class ReqBloodComponent implements OnInit {
  bloodReqForm:BloodReq = {
    id:1,
    patientName:"Sunita Lal",
    city:"Hyderabad",
    hospitalName:"Care Hospital",
    whenReq:new Date()
  };
  constructor() { }

  ngOnInit() {
  }
  submit(){
    console.log(this.bloodReqForm);
  }
}
