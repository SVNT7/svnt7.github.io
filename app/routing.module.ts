import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BohaterzyComponent} from "./bohaterzy/bohaterzy.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SzczegolyBohaterowComponent} from "./szczegoly-bohaterow/szczegoly-bohaterow.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'bohaterzy', component: BohaterzyComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'szczegoly/:id', component: SzczegolyBohaterowComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
