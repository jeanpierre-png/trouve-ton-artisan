import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface artisan {

  id: number;
  name: string;
  image: string;
  specialty: string;
  location: string;
  note: number;
  category: string;
  website: string;
  about: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private jsonUrl = 'assets/datas.json';

  constructor(private http: HttpClient) { }

  // Récupère tous les artisans
  getData(): Observable<artisan[]> {
    return this.http.get<artisan[]>(this.jsonUrl).pipe(
      map((data: artisan[]) => {
        return data.map(item => ({ ...item, id: +item.id, note: +item.note })); // Conversion de id en nombre //
      })
    );
  } 

  getArtisanById(id: number): Observable<artisan | undefined> {
    return this.getData().pipe(
      map((artisans: artisan[]) => artisans.find((artisan) => artisan.id === id))
    );
  } 


  // Récupère 3 artisans du mois (filtrés par `top: true`)
  getTopArtisans(): Observable<any[]> {

    return this.http.get<any[]>(this.jsonUrl).pipe(

      map((artisans: any[]) => {
        return artisans.filter((artisan) => artisan.top).slice(0, 3);
      })

    );
  }  

}
