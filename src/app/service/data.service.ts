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
        return data.map(item => ({ ...item, id: +item.id })); // Conversion de id en nombre //
      })
    );
  } 

}
