import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../../components/hero/hero';
import { ContentSectionComponent } from '../../../components/content-section/content-section';
import { FuncionesComponent } from '../../../components/funciones/funciones.component';
import { VistazoComponent } from '../../../components/vistazo/vistazo.component';
import { FuncionamientoComponent } from '../../../components/funcionamiento/funcionamiento';
import { PlanesComponent } from '../../../components/planes/planes';
import { DownloadSection } from "../../../components/download-section/download-section";
import { PromoPremium } from "../../../components/promo-premium/promo-premium";
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroComponent,
    ContentSectionComponent,
    FuncionesComponent,
    FuncionamientoComponent,
    PlanesComponent,
    VistazoComponent,
    DownloadSection,
    PromoPremium
  ],
  templateUrl: './principal.component.html',
})
export class PrincipalComponent implements OnInit {
  private productService = inject(ProductService);
  featuredProducts: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.featuredProducts = products.slice(0, 3);
    });
  }
}
