import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-listes-artisans',
  standalone: false,
  templateUrl: './listes-artisans.component.html',
  styleUrl: './listes-artisans.component.scss'
})
export class ListesArtisansComponent {

  artisans: any[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    // Récupérer les artisans et filtrer si un terme de recherche est fourni
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || ''; 

      // Charger les artisans depuis le service
      this.dataService.getData().subscribe((data) => {
        this.artisans = this.filterArtisans(data, this.searchTerm);
      });
    });
  }

  // Méthode pour filtrer les artisans selon le terme de recherche
  filterArtisans(artisans: any[], searchTerm: string): any[] {
    if (!searchTerm.trim()) return artisans;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return artisans.filter(artisan =>
      artisan.name.toLowerCase().startsWith(lowerCaseSearchTerm) ||
      artisan.location.toLowerCase().startsWith(lowerCaseSearchTerm) ||
      artisan.specialty.toLowerCase().startsWith(lowerCaseSearchTerm)
    );
  }

}
