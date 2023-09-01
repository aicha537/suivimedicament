import { Component, OnInit } from '@angular/core';
import { Medicaments } from 'src/app/medicaments';
import { FormBuilder,FormGroup,  Validators } from '@angular/forms';
import {MedicamentsService } from 'src/app/medicaments.service';


@Component({
  selector: 'app-liste-medicaments',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.css']
})
export class ListeMedicamentComponent implements OnInit {
  
  mediForm: FormGroup;
  showForm = false;
  medicaments: Medicaments[] | any; 

  constructor(
    private medicamentsService: MedicamentsService,
    private formBuilder: FormBuilder
  ) {
    this.mediForm = this.formBuilder.group({
      id:['', Validators.required],
      nom: ['', Validators.required],
      dosage: ['', Validators.required],
      frequence: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    this.medicaments = await this.medicamentsService.getMedicaments();
  }

  async supprimerMedicament(id: number): Promise<void> {
    await this.medicamentsService.supprimerMedicament(id);
    this.medicaments = await this.medicamentsService.getMedicaments();
  }

  async submitMedicamentForm() {
    const newMedicament: Medicaments = this.mediForm.value;
    await this.medicamentsService.addMedicament(newMedicament);
    this.medicaments = await this.medicamentsService.getMedicaments();
    this.mediForm.reset();
    this.showForm = false;
  }

}

