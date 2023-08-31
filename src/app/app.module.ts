import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeMedicamentComponent } from './module/general/liste-medicament/liste-medicament.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicamentDetailComponent } from './medicament-detail/medicament-detail.component';
import { Medicaments } from './medicaments';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeMedicamentComponent,
    MedicamentDetailComponent,
    ErrorDialogComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Medicaments],
  bootstrap: [AppComponent]
})
export class AppModule { }
