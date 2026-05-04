import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-5 animate__animated animate__fadeIn">
      <div class="text-center mb-5">
        <h2 class="fw-bold">Finalizar Compra</h2>
        <p class="text-muted">Completa tus datos para recibir tus quesos favoritos</p>
      </div>

      <div class="row g-5">
        <!-- Formulario de Envío -->
        <div class="col-lg-7">
          <div class="card border-0 shadow-sm p-4 mb-4 rounded-4">
            <h4 class="mb-4 fw-bold"><i class="bi bi-truck me-2"></i> Datos de Envío</h4>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Nombre</label>
                <input type="text" class="form-control" placeholder="Nombre">
              </div>
              <div class="col-md-6">
                <label class="form-label">Apellidos</label>
                <input type="text" class="form-control" placeholder="Apellidos">
              </div>
              <div class="col-12">
                <label class="form-label">Dirección</label>
                <input type="text" class="form-control" placeholder="Calle Ejemplo, 123">
              </div>
              <div class="col-md-6">
                <label class="form-label">Ciudad</label>
                <input type="text" class="form-control" placeholder="Madrid">
              </div>
              <div class="col-md-6">
                <label class="form-label">Código Postal</label>
                <input type="text" class="form-control" placeholder="28001">
              </div>
            </div>
          </div>

          <!-- Formulario de Pago -->
          <div class="card border-0 shadow-sm p-4 rounded-4">
            <h4 class="mb-4 fw-bold"><i class="bi bi-credit-card me-2"></i> Método de Pago</h4>
            
            <div class="payment-methods mb-4">
              <div class="form-check payment-option p-3 mb-2 rounded-3 border" [class.selected]="paymentMethod === 'card'">
                <input class="form-check-input" type="radio" name="payment" id="card" [(ngModel)]="paymentMethod" value="card">
                <label class="form-check-label d-flex justify-content-between w-100" for="card">
                  <span>Tarjeta de Crédito</span>
                  <i class="bi bi-credit-card-2-back fs-5"></i>
                </label>
              </div>
              <div class="form-check payment-option p-3 mb-2 rounded-3 border" [class.selected]="paymentMethod === 'paypal'">
                <input class="form-check-input" type="radio" name="payment" id="paypal" [(ngModel)]="paymentMethod" value="paypal">
                <label class="form-check-label d-flex justify-content-between w-100" for="paypal">
                  <span>PayPal</span>
                  <i class="bi bi-paypal fs-5"></i>
                </label>
              </div>
              <div class="form-check payment-option p-3 mb-2 rounded-3 border" [class.selected]="paymentMethod === 'transfer'">
                <input class="form-check-input" type="radio" name="payment" id="transfer" [(ngModel)]="paymentMethod" value="transfer">
                <label class="form-check-label d-flex justify-content-between w-100" for="transfer">
                  <span>Transferencia Bancaria</span>
                  <i class="bi bi-bank fs-5"></i>
                </label>
              </div>
            </div>

            <div *ngIf="paymentMethod === 'card'" class="row g-3 animate__animated animate__fadeIn">
              <div class="col-12">
                <label class="form-label">Número de Tarjeta</label>
                <input type="text" class="form-control" placeholder="0000 0000 0000 0000">
              </div>
              <div class="col-md-6">
                <label class="form-label">Expiración</label>
                <input type="text" class="form-control" placeholder="MM/YY">
              </div>
              <div class="col-md-6">
                <label class="form-label">CVV</label>
                <input type="text" class="form-control" placeholder="123">
              </div>
            </div>
          </div>
        </div>

        <!-- Resumen del Pedido -->
        <div class="col-lg-5">
          <div class="card border-0 shadow-sm p-4 rounded-4 sticky-top" style="top: 100px;">
            <h4 class="mb-4 fw-bold">Resumen</h4>
            <div class="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>24,50€</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span>Envío</span>
              <span class="text-success">Gratis</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between mb-4">
              <span class="h5 fw-bold">Total</span>
              <span class="h5 fw-bold text-primary">24,50€</span>
            </div>
            <button class="btn btn-primary btn-lg w-100 rounded-pill py-3 fw-bold">
              Confirmar y Pagar
            </button>
            <p class="text-center mt-3 small text-muted">
              <i class="bi bi-lock-fill me-1"></i> Pago seguro y encriptado
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .payment-option {
      cursor: pointer;
      transition: all 0.2s;
    }
    .payment-option:hover {
      background-color: #fef3c7;
    }
    .payment-option.selected {
      border-color: #f59e0b !important;
      background-color: #fffbeb;
    }
    .form-control {
      border-radius: 10px;
      padding: 12px;
    }
  `]
})
export class CheckoutComponent {
  paymentMethod: string = 'card';
}
