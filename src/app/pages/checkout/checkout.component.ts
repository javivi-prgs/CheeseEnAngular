import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="checkout-container py-5 animate__animated animate__fadeIn">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold" style="color: #ffffff !important;">Finalizar Compra</h2>
          <p style="color: rgba(255, 255, 255, 0.75) !important;">Completa tus datos para recibir tus quesos favoritos</p>
        </div>

        <div class="row g-5">
          <!-- Formulario de Envío -->
          <div class="col-lg-7">
            <div class="checkout-card p-4 mb-4 rounded-4">
              <h4 class="mb-4 fw-bold" style="color: #ffffff !important;"><i class="bi bi-truck me-2"></i> Datos de Envío</h4>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label" style="color: #ffffff !important;">Nombre</label>
                  <input type="text" class="form-control" placeholder="Nombre">
                </div>
                <div class="col-md-6">
                  <label class="form-label" style="color: #ffffff !important;">Apellidos</label>
                  <input type="text" class="form-control" placeholder="Apellidos">
                </div>
                <div class="col-12">
                  <label class="form-label" style="color: #ffffff !important;">Dirección</label>
                  <input type="text" class="form-control" placeholder="Calle Ejemplo, 123">
                </div>
                <div class="col-md-6">
                  <label class="form-label" style="color: #ffffff !important;">Ciudad</label>
                  <input type="text" class="form-control" placeholder="Madrid">
                </div>
                <div class="col-md-6">
                  <label class="form-label" style="color: #ffffff !important;">Código Postal</label>
                  <input type="text" class="form-control" placeholder="28001">
                </div>
              </div>
            </div>

            <!-- Formulario de Pago -->
            <div class="checkout-card p-4 rounded-4">
              <h4 class="mb-4 fw-bold" style="color: #ffffff !important;"><i class="bi bi-credit-card me-2"></i> Método de Pago</h4>
              
              <div class="payment-methods mb-4">
                <div class="form-check payment-option p-3 mb-2 rounded-3" [class.selected]="paymentMethod === 'card'">
                  <input class="form-check-input" type="radio" name="payment" id="card" [(ngModel)]="paymentMethod" value="card">
                  <label class="form-check-label d-flex justify-content-between w-100" for="card">
                    <span style="color: #ffffff !important;">Tarjeta de Crédito</span>
                    <i class="bi bi-credit-card-2-back fs-5" style="color: #ffffff !important;"></i>
                  </label>
                </div>
                <div class="form-check payment-option p-3 mb-2 rounded-3" [class.selected]="paymentMethod === 'paypal'">
                  <input class="form-check-input" type="radio" name="payment" id="paypal" [(ngModel)]="paymentMethod" value="paypal">
                  <label class="form-check-label d-flex justify-content-between w-100" for="paypal">
                    <span style="color: #ffffff !important;">PayPal</span>
                    <i class="bi bi-paypal fs-5" style="color: #ffffff !important;"></i>
                  </label>
                </div>
                <div class="form-check payment-option p-3 mb-2 rounded-3" [class.selected]="paymentMethod === 'transfer'">
                  <input class="form-check-input" type="radio" name="payment" id="transfer" [(ngModel)]="paymentMethod" value="transfer">
                  <label class="form-check-label d-flex justify-content-between w-100" for="transfer">
                    <span style="color: #ffffff !important;">Transferencia Bancaria</span>
                    <i class="bi bi-bank fs-5" style="color: #ffffff !important;"></i>
                  </label>
                </div>
              </div>

              <div *ngIf="paymentMethod === 'card'" class="row g-3 animate__animated animate__fadeIn">
                <div class="col-12">
                  <label class="form-label" style="color: #ffffff !important;">Número de Tarjeta</label>
                  <input type="text" class="form-control" placeholder="0000 0000 0000 0000">
                </div>
                <div class="col-md-6">
                  <label class="form-label" style="color: #ffffff !important;">Expiración</label>
                  <input type="text" class="form-control" placeholder="MM/YY">
                </div>
                <div class="col-md-6">
                  <label class="form-label" style="color: #ffffff !important;">CVV</label>
                  <input type="text" class="form-control" placeholder="123">
                </div>
              </div>
            </div>
          </div>

          <!-- Resumen del Pedido -->
          <div class="col-lg-5">
            <div class="checkout-card p-4 rounded-4 sticky-top" style="top: 100px;">
              <h4 class="mb-4 fw-bold" style="color: #ffffff !important;">Resumen</h4>
              <div class="d-flex justify-content-between mb-2">
                <span style="color: rgba(255, 255, 255, 0.75) !important;">Subtotal</span>
                <span style="color: #ffffff !important;">24,50€</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span style="color: rgba(255, 255, 255, 0.75) !important;">Envío</span>
                <span class="text-success fw-bold">Gratis</span>
              </div>
              <hr style="border-color: var(--glass-border) !important;">
              <div class="d-flex justify-content-between mb-4">
                <span class="h5 fw-bold" style="color: #ffffff !important;">Total</span>
                <span class="h5 fw-bold text-primary">24,50€</span>
              </div>
              <button class="btn btn-cheese btn-lg w-100 rounded-pill py-3 fw-bold">
                Confirmar y Pagar
              </button>
              <p class="text-center mt-3 small mb-0" style="color: rgba(255, 255, 255, 0.6) !important;">
                <i class="bi bi-lock-fill me-1"></i> Pago seguro y encriptado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .checkout-container {
      background-color: var(--bg-dark, #0a0a0a);
      min-height: calc(100vh - 80px);
    }
    .checkout-card {
      background: var(--bg-card, rgba(30, 30, 30, 0.6));
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
      backdrop-filter: blur(20px);
    }
    .payment-option {
      cursor: pointer;
      transition: all 0.2s;
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.1));
      background-color: rgba(255, 255, 255, 0.03);
    }
    .payment-option:hover {
      background-color: rgba(255, 255, 255, 0.06);
    }
    .payment-option.selected {
      border-color: var(--primary, #FFD700) !important;
      background-color: rgba(255, 215, 0, 0.08);
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
      color: #fff !important;
      box-shadow: 0 0 0 0.25rem rgba(255, 215, 0, 0.15);
    }
  `]
})
export class CheckoutComponent {
  paymentMethod: string = 'card';
}

