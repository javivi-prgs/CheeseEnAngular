import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container py-5 animate__animated animate__fadeIn">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-5">
            <h1 class="display-5 fw-bold mb-4" style="color: #ffffff !important;">Hablemos de Queso</h1>
            <p class="lead mb-5" style="color: rgba(255, 255, 255, 0.75) !important;">
              ¿Tienes alguna duda sobre un producto? ¿Necesitas asesoramiento para una tabla de quesos? Estamos aquí para ayudarte.
            </p>

            <div class="contact-info">
              <div class="d-flex align-items-center mb-4">
                <div class="icon-box rounded-3 me-3 p-3">
                  <i class="bi bi-geo-alt fs-4"></i>
                </div>
                <div>
                  <h5 class="mb-0 fw-bold" style="color: #ffffff !important;">Dirección</h5>
                  <p class="mb-0" style="color: rgba(255, 255, 255, 0.75) !important;">Calle Mayor, 45, 28013 Madrid</p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div class="icon-box rounded-3 me-3 p-3">
                  <i class="bi bi-envelope fs-4"></i>
                </div>
                <div>
                  <h5 class="mb-0 fw-bold" style="color: #ffffff !important;">Email</h5>
                  <p class="mb-0" style="color: rgba(255, 255, 255, 0.75) !important;">info@cheeseangular.com</p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div class="icon-box rounded-3 me-3 p-3">
                  <i class="bi bi-telephone fs-4"></i>
                </div>
                <div>
                  <h5 class="mb-0 fw-bold" style="color: #ffffff !important;">Teléfono</h5>
                  <p class="mb-0" style="color: rgba(255, 255, 255, 0.75) !important;">+34 912 345 678</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="contact-card p-4 p-md-5 rounded-4">
              <h3 class="fw-bold mb-4" style="color: #ffffff !important;">Enviarnos un mensaje</h3>
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label" style="color: #ffffff !important;">Nombre</label>
                    <input type="text" class="form-control" placeholder="Tu nombre">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" style="color: #ffffff !important;">Email</label>
                    <input type="email" class="form-control" placeholder="tu@email.com">
                  </div>
                  <div class="col-12">
                    <label class="form-label" style="color: #ffffff !important;">Asunto</label>
                    <input type="text" class="form-control" placeholder="¿En qué podemos ayudarte?">
                  </div>
                  <div class="col-12">
                    <label class="form-label" style="color: #ffffff !important;">Mensaje</label>
                    <textarea class="form-control" rows="5" placeholder="Escribe aquí tu mensaje..."></textarea>
                  </div>
                  <div class="col-12 mt-4">
                    <button type="submit" class="btn btn-cheese btn-lg w-100 rounded-pill py-3 fw-bold">
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      background-color: var(--bg-dark, #0a0a0a);
      min-height: calc(100vh - 80px);
    }
    .icon-box {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--primary, #FFD700) !important;
      color: var(--bg-dark, #0a0a0a) !important;
    }
    .contact-card {
      background: var(--bg-card, rgba(30, 30, 30, 0.6));
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
      backdrop-filter: blur(20px);
    }
    .form-control {
      border-radius: 12px;
      padding: 12px;
      background-color: rgba(255, 255, 255, 0.05) !important;
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.15)) !important;
      color: #fff !important;
    }
    .form-control::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    .form-control:focus {
      background-color: rgba(255, 255, 255, 0.08) !important;
      border-color: var(--primary, #FFD700) !important;
      box-shadow: 0 0 0 0.25rem rgba(255, 215, 0, 0.15);
    }
  `]
})
export class ContactComponent {}


