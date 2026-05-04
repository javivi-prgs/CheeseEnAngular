import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="auth-wrapper d-flex align-items-center justify-content-center py-5 animate__animated animate__fadeIn">
      <div class="auth-card shadow-lg p-5 animate__animated animate__zoomIn">
        <div class="text-center mb-4">
          <h2 class="fw-bold" style="color: #ffffff !important;">Crea tu cuenta</h2>
          <p style="color: rgba(255, 255, 255, 0.7) !important;">Únete a la mayor comunidad de amantes del queso</p>
        </div>

        <form (ngSubmit)="onRegister()">
          <div class="row g-3 mb-3">
            <div class="col">
              <label class="form-label small fw-bold" style="color: #ffffff !important;">Nombre</label>
              <input type="text" class="form-control rounded-pill px-3" placeholder="Ana" required>
            </div>
            <div class="col">
              <label class="form-label small fw-bold" style="color: #ffffff !important;">Apellidos</label>
              <input type="text" class="form-control rounded-pill px-3" placeholder="García" required>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label small fw-bold" style="color: #ffffff !important;">Email</label>
            <input type="email" class="form-control rounded-pill px-3" placeholder="tu@email.com" required>
          </div>
          <div class="mb-4">
            <label class="form-label small fw-bold" style="color: #ffffff !important;">Contraseña</label>
            <input type="password" class="form-control rounded-pill px-3" placeholder="••••••••" required>
          </div>
          
          <div class="mb-4">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="terms" required>
              <label class="form-check-label small" for="terms" style="color: rgba(255, 255, 255, 0.7) !important;">Acepto los términos y condiciones</label>
            </div>
          </div>

          <button type="submit" class="btn btn-cheese w-100 rounded-pill py-2 fw-bold shadow-sm mb-4">
            Registrarse ahora
          </button>

          <div class="text-center">
            <p class="small mb-0" style="color: rgba(255, 255, 255, 0.7) !important;">¿Ya tienes cuenta?</p>
            <a routerLink="/login" class="fw-bold text-decoration-none" style="color: var(--primary, #FFD700) !important;">Inicia sesión aquí</a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .auth-wrapper {
      min-height: calc(100vh - 80px);
      background-color: var(--bg-dark, #0a0a0a);
    }
    .auth-card {
      width: 100%;
      max-width: 500px;
      background: var(--bg-card, rgba(30, 30, 30, 0.6));
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
      backdrop-filter: blur(20px);
      border-radius: 20px;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    }
    .form-control {
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
      color: #fff !important;
      box-shadow: 0 0 0 0.25rem rgba(255, 215, 0, 0.15);
    }
  `]
})
export class RegisterComponent {
  onRegister() {
    console.log('Register attempt');
  }
}
