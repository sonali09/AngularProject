import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  majHeading: string;
  leftLogo: string;
  rightLogo: string;
  showBorder = true;
  constructor() { 
    this.majHeading = "Sanjeevani Blood Bank";
    this.leftLogo = 'assets/images/logo3.png';
    this.rightLogo = 'assets/images/logo6.jpg';
  }
  ngOnInit() {
  }
}
