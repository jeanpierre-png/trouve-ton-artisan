import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { artisan, DataService } from '../../service/data.service';

@Component({
  selector: 'app-categories-artisans',
  standalone: false,
  templateUrl: './categories-artisans.component.html',
  styleUrl: './categories-artisans.component.scss'
})

export class CategoriesArtisansComponent implements OnInit {

  artisans: artisan[] = [];
  category: string = ''; // Catégorie récupérée de la route

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    
    // Récupère la catégorie depuis l'URL
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category') || ''; // Si pas de catégorie dans l'URL, ce sera une chaîne vide
      this.category = category; 

      this.dataService.getArtisansByCategory(category).subscribe({
        next: (data) => {

          this.artisans = data;
        }
      });
      
    });
  }

}
