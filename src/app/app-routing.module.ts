import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { DonorDashboardComponent } from './donor-dashboard/donor-dashboard.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReqBloodComponent } from './req-blood/req-blood.component';

const routes: Routes = [
  {path:'', redirectTo:'donorDetails', pathMatch:'full'},
  {path:'donorDetails', component:DonorDetailsComponent},
  {path:'showReq', component:ShowRequestComponent},
  {path:'dnrDashboard', component:DonorDashboardComponent},
  {path:'reviews', component:ReviewsComponent},
  {path:'reqBlood', component:ReqBloodComponent},
  {path:'**', redirectTo:'donorDetails'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
