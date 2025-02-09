import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    EtoilesComponent
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
