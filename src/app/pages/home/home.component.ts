import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  topArtisans: any[] = [];

  constructor(private artisanService: DataService) { }

  ngOnInit(): void {
    this.artisanService.getTopArtisans().subscribe((data) => {
      this.topArtisans = data;
    });
  }

}
