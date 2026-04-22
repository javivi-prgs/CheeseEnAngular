import { Component } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css',
})
export class LoginModalComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Usuario registrado correctamente'); // Siguiendo la instrucción literal de la tarea 11
    
    const modalElement = document.getElementById('loginModal');
    if (modalElement) {
      const modalInstance = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  }
}
