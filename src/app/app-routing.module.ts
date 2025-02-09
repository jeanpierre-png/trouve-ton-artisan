import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclarationAccessibiliteComponent } from './pages/declaration-accessibilite/declaration-accessibilite.component';
import { DonneesPersonnellesComponent } from './pages/donnees-personnelles/donnees-personnelles.component';
import { GestionCookiesComponent } from './pages/gestion-cookies/gestion-cookies.component';
import { HomeComponent } from './pages/home/home.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
