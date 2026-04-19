import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-section',
  imports: [],
  templateUrl: './content-section.html',
  styleUrl: './content-section.css',
})
export class ContentSectionComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() tipo: 'radar' | 'chat' | 'steps' = 'radar';
  @Input() reversible: boolean = false;
}
