import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ContentSectionComponent } from './components/content-section/content-section';
import { FooterComponent } from './components/footer/footer';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { VistazoComponent } from './components/vistazo/vistazo.component';
import { FuncionamientoComponent } from './components/funcionamiento/funcionamiento';
import { PlanesComponent } from './components/planes/planes';
import { DownloadSection } from "./components/download-section/download-section";
import { PromoPremium } from "./components/promo-premium/promo-premium";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ContentSectionComponent,
    FuncionesComponent,
    FuncionamientoComponent,
    PlanesComponent,
    VistazoComponent,
    FooterComponent,
    DownloadSection,
    PromoPremium
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('CheeseEnAngular');
}
