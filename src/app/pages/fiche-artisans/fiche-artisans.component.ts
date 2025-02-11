import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { artisan, DataService } from '../../service/data.service';

@Component({
  selector: 'app-fiche-artisans',
  standalone: false,
  templateUrl: './fiche-artisans.component.html',
  styleUrl: './fiche-artisans.component.scss'
})
export class FicheArtisansComponent implements OnInit {

  artisan: artisan | undefined; 

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe((params) => {
      const artisanId = Number(params.get('id'));
      console.log('Artisan ID:', artisanId);

      this.dataService.getArtisanById(artisanId).subscribe((artisan) => {
        console.log('Artisan trouvé :', artisan);
        this.artisan = artisan;
      });
    });
  
  }

  confirmationMessage: string | null = null;

  onSubmit(form: any) {
    // Afficher le message de confirmation
    this.confirmationMessage = "Votre message à bien été envoyé à l'artisan, une réponse vous sera apportée sous 48h";

    form.resetForm();
  }
}
