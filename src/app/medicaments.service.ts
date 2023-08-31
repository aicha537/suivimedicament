import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicamentsService {
  private medicaments: Medicaments[] = [];
 
  constructor() {}

  async supprimerMedicament(id: number): Promise<void> {
    const index = this.medicaments.findIndex(medicament => medicament.id === id);
    if (index !== -1) {
      this.medicaments.splice(index, 1);
    }
  }

  async getMedicaments(): Promise<Medicaments[]> {
    return this.medicaments;
  }
  async getMedicamentDetail(id: number): Promise<Medicaments | undefined> {
    const medicament = this.medicaments.find(m => m.id === id);
    return Promise.resolve(medicament);
  }
  
  async addMedicament(newMedicament: Medicaments): Promise<void> {
    this.medicaments.push(newMedicament);
    console.log(newMedicament);
  }
  
}

interface Medicaments {
  
  id: number;
  nom: string;  
}


