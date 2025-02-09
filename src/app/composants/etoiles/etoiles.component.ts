import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-etoiles',
  standalone: false,
  templateUrl: './etoiles.component.html',
  styleUrl: './etoiles.component.scss'
})
export class EtoilesComponent  {

  @Input() note: number = 0; // La note de l’artisan
  stars: string[] = []; // Liste des étoiles à afficher

  ngOnInit(): void {
    this.generateStars();
  }

  ngOnChanges(): void {
    this.generateStars();
  }

  private generateStars(): void {
    const fullStars = Math.floor(this.note);
    const hasHalfStar = this.note % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    this.stars = [
      ...Array(fullStars).fill('star'), // Étoiles pleines
      ...(hasHalfStar ? ['star_half'] : []), // Demi-étoile
      ...Array(emptyStars).fill('star_outline') // Étoiles vides
    ];
  }

}
