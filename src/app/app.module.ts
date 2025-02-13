import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DataService } from './service/data.service';
import { FormsModule } from '@angular/forms';
import { EtoilesComponent } from './composants/etoiles/etoiles.component';
import { provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { FooterComponent } from './composants/footer/footer.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './pages/donnees-personnelles/donnees-personnelles.component';
import { DeclarationAccessibiliteComponent } from './pages/declaration-accessibilite/declaration-accessibilite.component';
import { GestionCookiesComponent } from './pages/gestion-cookies/gestion-cookies.component';
import { CategoriesArtisansComponent } from './composants/categories-artisans/categories-artisans.component';
import { FicheArtisansComponent } from './pages/fiche-artisans/fiche-artisans.component';
import { ListesArtisansComponent } from './pages/listes-artisans/listes-artisans.component';
import { SearchBarComponent } from './composants/search-bar/search-bar.component';
import { SearchArtisansPipe } from './pipe/search-artisans.pipe';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    EtoilesComponent,
    FooterComponent,
    MentionsLegalesComponent,
    DonneesPersonnellesComponent,
    DeclarationAccessibiliteComponent,
    GestionCookiesComponent,
    CategoriesArtisansComponent,
    FicheArtisansComponent,
    ListesArtisansComponent,
    SearchBarComponent,
    SearchArtisansPipe,
    Page404Component
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CommonModule,
    FormsModule
  ],

  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    DataService,
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
