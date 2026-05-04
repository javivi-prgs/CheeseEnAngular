import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="auth-wrapper d-flex align-items-center justify-content-center py-5 animate__animated animate__fadeIn">
      <div class="auth-card shadow-lg p-5 animate__animated animate__zoomIn">
        <div class="text-center mb-4">
          <h2 class="fw-bold" style="color: #ffffff !important;">Bienvenido de nuevo</h2>
          <p style="color: rgba(255, 255, 255, 0.7) !important;">Ingresa a tu cuenta de CheeseEnAngular</p>
        </div>

        <form (ngSubmit)="onLogin()">
          <div class="mb-3">
            <label class="form-label small fw-bold" style="color: #ffffff !important;">Email</label>
            <input type="email" class="form-control rounded-pill px-3" placeholder="tu@email.com" required>
          </div>
          <div class="mb-4">
            <label class="form-label small fw-bold" style="color: #ffffff !important;">Contraseña</label>
            <input type="password" class="form-control rounded-pill px-3" placeholder="••••••••" required>
          </div>
          
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="remember">
              <label class="form-check-label small" for="remember" style="color: rgba(255, 255, 255, 0.7) !important;">Recordarme</label>
            </div>
            <a href="#" class="small text-decoration-none" style="color: var(--primary, #FFD700) !important;">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" class="btn btn-cheese w-100 rounded-pill py-2 fw-bold shadow-sm mb-4">
            Iniciar Sesión
          </button>

          <div class="text-center">
            <p class="small mb-0" style="color: rgba(255, 255, 255, 0.7) !important;">¿No tienes cuenta?</p>
            <a routerLink="/registro" class="fw-bold text-decoration-none" style="color: var(--primary, #FFD700) !important;">Regístrate gratis</a>
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
      max-width: 450px;
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
export class LoginComponent {
  onLogin() {
    console.log('Login attempt');
  }
}

