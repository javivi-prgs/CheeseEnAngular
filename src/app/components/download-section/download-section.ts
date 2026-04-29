import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer";

@Component({
  selector: 'app-download-section',
  imports: [FooterComponent],
  templateUrl: './download-section.html',
  styleUrl: './download-section.css',
})
export class DownloadSection {
  downloadVirus() {
    const text = "Hola precios@, Cheese no está disponible en este momento, ya se hará proximamente 😉.";
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = 'VirusDelQueso.txt';
    a.click();
    
    window.URL.revokeObjectURL(url);
    
    alert("Enhorabuena, has sido infectado por el virus del queso 😉");
  }
}
