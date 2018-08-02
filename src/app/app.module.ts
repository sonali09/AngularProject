import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { DonorDashboardComponent } from './donor-dashboard/donor-dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HighlightDirective } from './highlight.directive';
import { MagnifyDirective } from './magnify.directive';
import { PastComponent } from './past/past.component';
import { FutureComponent } from './future/future.component';
import { FilterPipe } from './filter.pipe';
import { ReqBloodComponent } from './req-blood/req-blood.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DonorDetailsComponent,
    ShowRequestComponent,
    RequestDetailsComponent,
    DonorDashboardComponent,
    BannerComponent,
    ReviewsComponent,
    HighlightDirective,
    MagnifyDirective,
    PastComponent,
    FutureComponent,
    FilterPipe,
    ReqBloodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [PastComponent, FutureComponent]
})
export class AppModule { }
