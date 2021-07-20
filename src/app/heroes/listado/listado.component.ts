import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: String[] = ['Spiderman', 'Superman', 'Batman', 'Thor', 'Iroman'];
  heroeBorrado: String = '';

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
