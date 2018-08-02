import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../communication-service.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  review:string;
  constructor(private service:CommunicationServiceService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => {this.review = message;});     
  }
}
