import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { itemNavbar } from '../../interfaces/interface';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  listaMenu: itemNavbar[] = [
    {
      title: 'Tailwind',
      url: '/tailwind'
    },
    {
      title: 'Control flow',
      url: '/control-flow'
    },
    {
      title: 'Defer Options',
      url: '/defer-options'
    },
    
  ]
}
