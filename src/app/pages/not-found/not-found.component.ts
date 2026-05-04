import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styles: [`
    .not-found-container {
      background: radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 0%, #000 80%);
    }
    .text-primary {
      color: var(--primary) !important;
    }
  `]
})
export class NotFoundComponent { }
