import { Component } from '@angular/core';
import { RegisterModalComponent } from '../auth/register-modal/register-modal';
import { LoginModalComponent } from '../auth/login-modal/login-modal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RegisterModalComponent, LoginModalComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

}
