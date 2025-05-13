import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-maquetas',
  standalone: false,
  templateUrl: './lista-maquetas.component.html',
  styleUrl: './lista-maquetas.component.scss'
})
export class ListaMaquetasComponent {

  maqueta = {
    "name" : "Kamado Tanjiro",
    "type" : "Kimetsu no Yaiba",
    "price" : 500,
    "stock" : 3,
    "image" : "assets/img/tanjiro.jpg"
  }

}
