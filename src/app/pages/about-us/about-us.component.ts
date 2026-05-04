import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container py-5 animate__animated animate__fadeIn">
      <div class="container">
        <div class="row align-items-center g-5 mb-5">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">Nuestra Pasión por el Queso</h1>
            <p class="lead text-muted mb-4">
              Desde 1985, CheeseEnAngular se ha dedicado a buscar y traer los quesos más excepcionales directamente de pequeños productores locales y granjas tradicionales de todo el mundo.
            </p>
            <p class="text-muted">
              Nuestra misión es simple: educar paladares y elevar la experiencia de comer queso a una forma de arte. Cada pieza en nuestra cava ha sido seleccionada por su historia, su carácter y su impecable calidad.
            </p>
          </div>
          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1596135245813-f865f12f009e?auto=format&fit=crop&q=80&w=1000" class="img-fluid rounded-4 shadow-lg" alt="Nuestra tienda">
          </div>
        </div>

        <div class="row text-center g-4 mt-5">
          <div class="col-md-4">
            <div class="p-4 rounded-4 bg-white shadow-sm h-100">
              <i class="bi bi-heart-fill text-danger fs-1 mb-3"></i>
              <h3 class="fw-bold">Calidad</h3>
              <p class="text-muted">Solo seleccionamos productos con denominación de origen y procesos tradicionales.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 rounded-4 bg-white shadow-sm h-100">
              <i class="bi bi-people-fill text-primary fs-1 mb-3"></i>
              <h3 class="fw-bold">Comunidad</h3>
              <p class="text-muted">Trabajamos codo con codo con maestros queseros para preservar el oficio.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 rounded-4 bg-white shadow-sm h-100">
              <i class="bi bi-globe text-success fs-1 mb-3"></i>
              <h3 class="fw-bold">Global</h3>
              <p class="text-muted">Enviamos nuestras joyas gastronómicas a cualquier rincón del país.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      background: linear-gradient(to bottom, #fff, #f8f9fa);
    }
  `]
})
export class AboutUsComponent {}
