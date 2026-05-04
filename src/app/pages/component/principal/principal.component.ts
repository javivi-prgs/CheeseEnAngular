import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header';
import { HeroComponent } from '../../../components/hero/hero';
import { ContentSectionComponent } from '../../../components/content-section/content-section';
import { FooterComponent } from '../../../components/footer/footer';
import { FuncionesComponent } from '../../../components/funciones/funciones.component';
import { VistazoComponent } from '../../../components/vistazo/vistazo.component';
import { FuncionamientoComponent } from '../../../components/funcionamiento/funcionamiento';
import { PlanesComponent } from '../../../components/planes/planes';
import { DownloadSection } from "../../../components/download-section/download-section";
import { PromoPremium } from "../../../components/promo-premium/promo-premium";
import { ContactoComponent } from '../../../components/contacto/contacto';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ContentSectionComponent,
    FuncionesComponent,
    FuncionamientoComponent,
    PlanesComponent,
    VistazoComponent,
    FooterComponent,
    DownloadSection,
    PromoPremium,
    ContactoComponent
  ],
  templateUrl: './principal.component.html',
})
export class PrincipalComponent { }
