import { Component, OnInit, numberAttribute } from '@angular/core';
import { Medicaments} from '../medicaments';
import { MedicamentsService } from '../medicaments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicament-detail',
  templateUrl: './medicament-detail.component.html',
  styleUrls: ['./medicament-detail.component.css']
})
export class MedicamentDetailComponent implements OnInit {
  medicaments: Medicaments | any = null;

  constructor(
    private route: ActivatedRoute,
    private medicamentsService: MedicamentsService
  ) { }

  async ngOnInit(): Promise<void> {
    const idString = this.route.snapshot.paramMap.get('id'); // Récupère l'ID depuis les paramètres de route

    if (idString) {
      const id = parseInt(idString, 10); // Convertit l'ID en nombre
      if (!isNaN(id)) {
        this.medicaments = await this.medicamentsService.getMedicamentDetail(id);
      } else {
        console.error('ID n\'est pas un nombre valide');
      }
    } else {
      console.error('ID est nul');
    }
  }
}




