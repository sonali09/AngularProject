import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  activeDonImg = 'assets/images/banner3.jpg';

  constructor() { }

  ngOnInit() {
  }
  getActiveDonorCount():number{
    return 2123;
  }
}
