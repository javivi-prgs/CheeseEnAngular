import { Component } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  templateUrl: './register-modal.html',
  styleUrl: './register-modal.css',
})
export class RegisterModalComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Usuario registrado correctamente');
    
    // Cerrar el modal programáticamente si es necesario, 
    // pero con data-bs-dismiss en el botón no suele ser necesario si no hay validación compleja.
    // Sin embargo, el usuario pide que al darle se cierre.
    // Bootstrap 5 permite cerrar mediante JS.
    const modalElement = document.getElementById('registerModal');
    if (modalElement) {
      const modalInstance = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  }
}
