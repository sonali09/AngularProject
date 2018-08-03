import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '../../node_modules/@angular/common/http';
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

  addDonor(donor:BloodDonor):Observable<HttpResponse<{}>>{
    const headers = new HttpHeaders().set('content-type','application/json');
    return this.http.post<HttpResponse<{}>>(this.baseUrl, donor, {headers});
  }
  editDonor(donor:BloodDonor):Observable<HttpResponse<{}>>{
    return this.http.put<HttpResponse<{}>>(this.baseUrl, donor);
  }
  deleteDonor(donor:BloodDonor):Observable< HttpResponse<{}>>{
    return this.http.delete<HttpResponse<{}>>(this.baseUrl+'/'+donor.id);
  }
}
