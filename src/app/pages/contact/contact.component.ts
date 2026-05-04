import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-5 animate__animated animate__fadeIn">
      <div class="row g-5">
        <div class="col-lg-5">
          <h1 class="display-5 fw-bold mb-4">Hablemos de Queso</h1>
          <p class="lead text-muted mb-5">
            ¿Tienes alguna duda sobre un producto? ¿Necesitas asesoramiento para una tabla de quesos? Estamos aquí para ayudarte.
          </p>

          <div class="contact-info">
            <div class="d-flex align-items-center mb-4">
              <div class="icon-box bg-primary text-white rounded-3 me-3 p-3">
                <i class="bi bi-geo-alt fs-4"></i>
              </div>
              <div>
                <h5 class="mb-0 fw-bold">Dirección</h5>
                <p class="text-muted mb-0">Calle Mayor, 45, 28013 Madrid</p>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="icon-box bg-primary text-white rounded-3 me-3 p-3">
                <i class="bi bi-envelope fs-4"></i>
              </div>
              <div>
                <h5 class="mb-0 fw-bold">Email</h5>
                <p class="text-muted mb-0">info@cheesangula.com</p>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="icon-box bg-primary text-white rounded-3 me-3 p-3">
                <i class="bi bi-telephone fs-4"></i>
              </div>
              <div>
                <h5 class="mb-0 fw-bold">Teléfono</h5>
                <p class="text-muted mb-0">+34 912 345 678</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="card border-0 shadow-lg p-4 p-md-5 rounded-4">
            <h3 class="fw-bold mb-4">Enviarnos un mensaje</h3>
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Nombre</label>
                  <input type="text" class="form-control" placeholder="Tu nombre">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" placeholder="tu@email.com">
                </div>
                <div class="col-12">
                  <label class="form-label">Asunto</label>
                  <input type="text" class="form-control" placeholder="¿En qué podemos ayudarte?">
                </div>
                <div class="col-12">
                  <label class="form-label">Mensaje</label>
                  <textarea class="form-control" rows="5" placeholder="Escribe aquí tu mensaje..."></textarea>
                </div>
                <div class="col-12 mt-4">
                  <button type="submit" class="btn btn-primary btn-lg w-100 rounded-pill py-3 fw-bold">
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .icon-box {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .form-control {
      border-radius: 12px;
      padding: 12px;
      background-color: #f8f9fa;
      border: 1px solid transparent;
    }
    .form-control:focus {
      background-color: #fff;
      border-color: #f59e0b;
      box-shadow: 0 0 0 0.25rem rgba(245, 158, 11, 0.1);
    }
  `]
})
export class ContactComponent {}
