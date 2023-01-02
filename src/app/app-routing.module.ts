import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './component/home/claims/claims.component';
import { ECardComponent } from './component/home/e-card/e-card.component';
import { EmpanelHospitalsComponent } from './component/home/empanel-hospitals/empanel-hospitals.component';
import { HomeComponent } from './component/home/home.component';
import { NetworkHospitalsComponent } from './component/home/network-hospitals/network-hospitals.component';
import { PlanHospitalizationComponent } from './component/home/plan-hospitalization/plan-hospitalization.component';
import { MedicineHomeComponent } from './component/medicine-home/medicine-home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DealsinfoComponent } from './component/top-deals/dealsinfo/dealsinfo.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'e-card',component:ECardComponent},
  {path:'claims',component:ClaimsComponent},
  {path:'empanel-hospitals',component:EmpanelHospitalsComponent},
  {path:'network-hospitals',component:NetworkHospitalsComponent},
  {path:'plan-hospitalization',component:PlanHospitalizationComponent},
  {path:'medicine-home',component:MedicineHomeComponent},
  {path:'dealsinfo',component:DealsinfoComponent},
  {path:'full-dealsinfo/:drugCode',component:DealsinfoComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
