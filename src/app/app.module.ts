import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ECardComponent } from './component/home/e-card/e-card.component';
import { ClaimsComponent } from './component/home/claims/claims.component';
import { PlanHospitalizationComponent } from './component/home/plan-hospitalization/plan-hospitalization.component';
import { NetworkHospitalsComponent } from './component/home/network-hospitals/network-hospitals.component';
import { EmpanelHospitalsComponent } from './component/home/empanel-hospitals/empanel-hospitals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { MedicineHomeComponent } from './component/medicine-home/medicine-home.component';
import { TopDealsComponent } from './component/top-deals/top-deals.component';
import { DealsinfoComponent } from './component/top-deals/dealsinfo/dealsinfo.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ECardComponent,
    ClaimsComponent,
    PlanHospitalizationComponent,
    NetworkHospitalsComponent,
    EmpanelHospitalsComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    DealsinfoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
