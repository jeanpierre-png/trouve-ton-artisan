import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesArtisansComponent } from './composants/categories-artisans/categories-artisans.component';
import { DeclarationAccessibiliteComponent } from './pages/declaration-accessibilite/declaration-accessibilite.component';
import { DonneesPersonnellesComponent } from './pages/donnees-personnelles/donnees-personnelles.component';
import { FicheArtisansComponent } from './pages/fiche-artisans/fiche-artisans.component';
import { GestionCookiesComponent } from './pages/gestion-cookies/gestion-cookies.component';
import { HomeComponent } from './pages/home/home.component';
import { ListesArtisansComponent } from './pages/listes-artisans/listes-artisans.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { Page404Component } from './pages/page404/page404.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },

  {
    path: 'mention-legales',
    component: MentionsLegalesComponent,
  },

  {
    path: 'donnees-personnelles',
    component: DonneesPersonnellesComponent,
  },

  {
    path: 'declaration-accessibilite',
    component: DeclarationAccessibiliteComponent,
  },

  {
    path: 'gestion-des-cookies',
    component: GestionCookiesComponent,
  },

  {
    path: 'categorie/:category',
    component: CategoriesArtisansComponent,
  },

  {
    path: 'fiche-artisan/:id',
    component: FicheArtisansComponent,
  },

  {
    path: 'listes-artisans',
    component: ListesArtisansComponent,
  },

  {
    path: '404',
    component: Page404Component,
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
