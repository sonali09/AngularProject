import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {
  private commService = new BehaviorSubject<string>('No new Reviews found!');
  currentMessage = this.commService.asObservable();

  constructor() { }
  changeReview(message:string){
    this.commService.next(message); 
  }
}
