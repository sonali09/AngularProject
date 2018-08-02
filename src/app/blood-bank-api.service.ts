import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { BloodDonor } from './blood-donor';

@Injectable({
  providedIn: 'root'
})
export class BloodBankAPIService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/donors';
  findAllDonors():Observable<BloodDonor[]>{
    return this.http.get<BloodDonor[]>(this.baseUrl);
  }
}
