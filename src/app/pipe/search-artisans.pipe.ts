import { Pipe, PipeTransform } from '@angular/core';
import { artisan } from '../service/data.service';

@Pipe({
  name: 'searchArtisans',
  standalone: false
})

export class SearchArtisansPipe implements PipeTransform {

  transform(artisans: artisan[], searchTerm: string): artisan [] {
    if (!artisans || !searchTerm.trim) {
      return []; 
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      artisan.location.toLowerCase().includes(lowerCaseSearchTerm) ||
      artisan.specialty.toLowerCase().includes(lowerCaseSearchTerm)
    );

  }

}
