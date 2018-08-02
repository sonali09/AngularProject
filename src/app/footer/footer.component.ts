import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyRight: string;
  faceBook: string;
  twitter: string;
  moreAbout: string;
  constructor() {
    this.copyRight = "All rights reserved to Sanjeevani blood bank corp.";
    this.faceBook = "assets/images/fbLogo.png";
    this.twitter = "assets/images/tweetLogo.png";
    this.moreAbout = "https://en.wikipedia.org/wiki/Blood_donation";
   }

  ngOnInit() {
  }

}
