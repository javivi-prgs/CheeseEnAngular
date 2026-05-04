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
            <h1 class="display-4 fw-bold mb-4" style="color: #ffffff !important;">Nuestra Pasión por los Quesos</h1>
            <p class="lead mb-4" style="color: rgba(255, 255, 255, 0.8) !important;">
              Desde 2025, Cheese se ha dedicado a buscar y atraer a personas con ganas de conocer gente nueva y de calidad.
            </p>
            <p style="color: rgba(255, 255, 255, 0.7) !important;">
              Nuestra misión es simple: Hacer que gente se conozca por medio de quedadas, y que mejor forma de hacerlo que con quedadas de amigos con los que compartir grandes momentos, ya sea viajando, de fiesta, o haciendo cualquier tipo de actividad.
            </p>
          </div>
          <div class="col-lg-6">
            <img src="nuestra_tienda.png" class="img-fluid rounded-4 shadow-lg border border-secondary" alt="Nuestra tienda">
          </div>
        </div>

        <div class="row text-center g-4 mt-5">
          <div class="col-md-4">
            <div class="p-4 rounded-4 about-card h-100">
              <i class="bi bi-heart-fill text-danger fs-1 mb-3"></i>
              <h3 class="fw-bold" style="color: #ffffff !important;">Calidad</h3>
              <p style="color: rgba(255, 255, 255, 0.7) !important;">Solo seleccionamos productos con denominación de origen y procesos tradicionales.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 rounded-4 about-card h-100">
              <i class="bi bi-people-fill text-primary fs-1 mb-3"></i>
              <h3 class="fw-bold" style="color: #ffffff !important;">Comunidad</h3>
              <p style="color: rgba(255, 255, 255, 0.7) !important;">Trabajamos codo con codo con maestros queseros para preservar el oficio.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 rounded-4 about-card h-100">
              <i class="bi bi-globe text-success fs-1 mb-3"></i>
              <h3 class="fw-bold" style="color: #ffffff !important;">Global</h3>
              <p style="color: rgba(255, 255, 255, 0.7) !important;">Enviamos nuestras joyas gastronómicas a cualquier rincón del país.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      background-color: var(--bg-dark, #0a0a0a);
      color: #ffffff;
      min-height: calc(100vh - 80px);
    }
    .about-card {
      background: var(--bg-card, rgba(30, 30, 30, 0.6));
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
      backdrop-filter: blur(20px);
      transition: var(--transition, all 0.4s cubic-bezier(0.16, 1, 0.3, 1));
    }
    .about-card:hover {
      border-color: var(--primary) !important;
      transform: translateY(-5px);
    }
  `]
})
export class AboutUsComponent {}


