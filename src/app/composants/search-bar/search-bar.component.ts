import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { artisan, DataService } from '../../service/data.service';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  searchTerm: string = '';
  artisans: artisan[] = [];
  isSearchSubmitted: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    
    this.searchTerm = '';
    this.isSearchSubmitted = false;

    // Charge les données des artisans
    this.dataService.getData().subscribe({
      next: (data: artisan[]) => {
        this.artisans = data;
        console.log('Artisans chargés avec succès.');
      },
      error: (error) => {
        console.error('Erreur lors du chargement des artisans :', error);
      }
    });
  }

  // Méthode appelée à chaque saisie dans la barre de recherche
  onSearch(): void {
    this.isSearchSubmitted = false; 
    console.log('Recherche en cours pour :', this.searchTerm);
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(form: any): void {
    if (form.valid && this.searchTerm.trim() !== '') {
      this.isSearchSubmitted = true;
      this.router.navigate(['/listes-artisans'], { queryParams: { search: this.searchTerm } }).then(() => {
        console.log('Recherche soumise avec :', this.searchTerm);
      });
    } else {
      console.warn('Formulaire invalide ou champ de recherche vide.');
    }
  }

    getFilteredArtisans(): artisan[] {
     if (!this.searchTerm.trim()) {
      return this.artisans;
     }

      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
  
      return this.artisans.filter(artisan =>
        artisan.name.toLowerCase().startsWith(lowerCaseSearchTerm) ||
        artisan.location.toLowerCase().startsWith(lowerCaseSearchTerm) ||
        artisan.specialty.toLowerCase().startsWith(lowerCaseSearchTerm)
      );
    }

  // Méthode appelée lorsqu'un artisan est sélectionné
  onArtisanClick(artisan: artisan): void {
    this.searchTerm = ''; 
    this.isSearchSubmitted = false; 
    this.router.navigate(['/fiche-artisan', artisan.id]).then(() => {
      console.log('Navigué vers la fiche de l\'artisan :', artisan.id);
    });
  }

}
