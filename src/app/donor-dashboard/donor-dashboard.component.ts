import { Component, OnInit, ViewChild, AfterContentInit, ViewContainerRef } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CommunicationServiceService } from '../communication-service.service';
import { CompAdderService } from '../comp-adder.service';
import { FutureComponent } from '../future/future.component';
import { PastComponent } from '../past/past.component';

@Component({
  selector: 'app-donor-dashboard',
  templateUrl: './donor-dashboard.component.html',
  styleUrls: ['./donor-dashboard.component.css']
})
export class DonorDashboardComponent implements OnInit, AfterContentInit {
  childImage: string;
  dnrCount:number;
  dashReview:string;
  userReview:string;
  @ViewChild(BannerComponent) bannerChild:BannerComponent;
  @ViewChild('pastComp', {read: ViewContainerRef}) pastCompHold: ViewContainerRef;
  @ViewChild('futureComp', {read: ViewContainerRef}) futureCompHold: ViewContainerRef;
  constructor(private service:CommunicationServiceService, private adderCompService:CompAdderService) { }
  ngOnInit() {
    this.service.currentMessage.subscribe(message => {this.dashReview = message;});
  }
  ngAfterContentInit(): void {
    this.childImage = this.bannerChild.activeDonImg;
    this.dnrCount = this.bannerChild.getActiveDonorCount();
  }
  changeDnrCount():void{
    this.dnrCount=this.dnrCount+1;
  }
  newMessage() {
    console.log('Adding new review');
         this.service.changeReview(this.userReview);
  }

  addComp(choice:string){
    if(choice === 'past'){
    this.adderCompService.setViewContainerRef(this.pastCompHold);
    this.adderCompService.addComponent(PastComponent);
  }else if(choice === 'future'){
    this.adderCompService.setViewContainerRef(this.futureCompHold);
    this.adderCompService.addComponent(FutureComponent);
  }
}

}
