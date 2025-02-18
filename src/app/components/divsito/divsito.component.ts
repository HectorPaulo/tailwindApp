import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divsito',
  imports: [],
  templateUrl: './divsito.component.html',
  styles: ''
})
export class DivsitoComponent {
  @Input({required: true}) contenido!: string;
  constructor() { 
      console.log('DivsitoComponent cargando');
  }
}
