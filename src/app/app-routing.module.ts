import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeMedicamentComponent } from './module/general/liste-medicament/liste-medicament.component';
import { MedicamentDetailComponent } from './medicament-detail/medicament-detail.component';
const routes: Routes = [
  {path: 'Accueil', component: AccueilComponent},
  { path: '', redirectTo: '/medicaments', pathMatch: 'full' },
  { path: 'medicaments', component: ListeMedicamentComponent },
  { path: 'medicament/:id', component: MedicamentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
