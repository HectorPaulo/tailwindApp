import { Component } from '@angular/core';
import { Pokemon } from '../../../../interfaces/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export class ControlFlowComponent {
  calificacion = 10;
  antojitos: string[] = ['Tacos', 'Tortas', 'Tamales', 'Tostadas', 'Tacos', 'Tortas', 'Tamales', 'Tostadas', 'Tacos', 'Tortas', 'Tamales', 'Tostadas'];
  champions: string[] = ['Yasuo', 'Zed', 'Akali', 'Yone', 'Yasuo', 'Zed', 'Akali', 'Yone', 'Yasuo', 'Zed', 'Akali', 'Yone'];
  usuario = {name:'Papu', puesto:'Desarrollador', admin:true, papu:false};
  pokemones: Pokemon[] = [
    {
      name: 'Pikachu',
      type: 'Electric',
      hp: 100,
      color: 'bg-yellow-500',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      hp: 200,
      color: 'bg-red-500',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      hp: 150,
      color: 'bg-blue-500',
    },
    {
      name: 'Bulbasaur',
      type: 'Grass',
      hp: 180,
      color: 'bg-green-500',
    },
  ];
  borrarAntojitos(){
    this.antojitos = [];
  }
  manageUserAdmin(){
    this.usuario.admin = !this.usuario.admin;
  }
  funcionPapu(){
    this.usuario.papu = !this.usuario.papu;
  }
  calificar(option: string){
    this.calificacion ++ ? option === 'suma' : this.calificacion --;
  }
  calificar2(n: number){
    this.calificacion += n;
  }
}
