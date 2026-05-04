import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="auth-wrapper d-flex align-items-center justify-content-center py-5">
      <div class="auth-card shadow-lg p-5 animate__animated animate__zoomIn">
        <div class="text-center mb-4">
          <h2 class="fw-bold">Crea tu cuenta</h2>
          <p class="text-muted">Únete a la mayor comunidad de amantes del queso</p>
        </div>

        <form (ngSubmit)="onRegister()">
          <div class="row g-3 mb-3">
            <div class="col">
              <label class="form-label small fw-bold">Nombre</label>
              <input type="text" class="form-control rounded-pill px-3" placeholder="Ana" required>
            </div>
            <div class="col">
              <label class="form-label small fw-bold">Apellidos</label>
              <input type="text" class="form-control rounded-pill px-3" placeholder="García" required>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label small fw-bold">Email</label>
            <input type="email" class="form-control rounded-pill px-3" placeholder="tu@email.com" required>
          </div>
          <div class="mb-4">
            <label class="form-label small fw-bold">Contraseña</label>
            <input type="password" class="form-control rounded-pill px-3" placeholder="••••••••" required>
          </div>
          
          <div class="mb-4">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="terms" required>
              <label class="form-check-label small" for="terms">Acepto los términos y condiciones</label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary w-100 rounded-pill py-2 fw-bold shadow-sm mb-4">
            Registrarse ahora
          </button>

          <div class="text-center">
            <p class="small text-muted mb-0">¿Ya tienes cuenta?</p>
            <a routerLink="/login" class="fw-bold text-decoration-none">Inicia sesión aquí</a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .auth-wrapper {
      min-height: 80vh;
      background: radial-gradient(circle at top left, #fffbeb, #fff);
    }
    .auth-card {
      width: 100%;
      max-width: 500px;
      background: white;
      border-radius: 20px;
    }
    .form-control:focus {
      box-shadow: 0 0 0 0.25rem rgba(245, 158, 11, 0.2);
      border-color: #f59e0b;
    }
  `]
})
export class RegisterComponent {
  onRegister() {
    console.log('Register attempt');
  }
}
