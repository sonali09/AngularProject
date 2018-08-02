import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BloodDonor } from '../blood-donor';
import { BloodBankAPIService } from '../blood-bank-api.service';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {
  donorList: BloodDonor[];
  details: string;
  constructor(private service:BloodBankAPIService) { }
  disableShowButton = false;
  searchStr = "O+";
  ngOnInit() {
    /*this.donorList=[
      {id: 101, name: "Jitendra",location:"Varanasi", mobNumber:9746384788,bloodGrp:"O+"},
      {id: 102, name: "Apoorva",location:"Vizag", mobNumber:9385788748,bloodGrp:"O-"},
      {id: 103, name: "Sonali",location:"Lucknow", mobNumber:984747783,bloodGrp:"B+"},
      {id: 104, name: "Ram",location:"Hyderabad", mobNumber:9467378844,bloodGrp:"A+"}
    ];*/

    this.service.findAllDonors().subscribe(data => this.donorList = data, err => console.log(err));
  }
  showDetails(name:string):void{
    this.details = name+' has donated more than '+this.getDetails(name)+' times';
  }

  getDetails(name:string):string{
    let detailsList = new Map<string, string>();
    detailsList.set('sonali1','620');
    detailsList.set('apoorva1','404');
    detailsList.set('jitendra1','100');
    detailsList.set('ram1','310');
    detailsList.set('apoorva2','325');
    detailsList.set('jitendra2','234');
    detailsList.set('sonali2','654');
    detailsList.set('ram2','214');
    return detailsList.get(name.toLowerCase());
  }
}
