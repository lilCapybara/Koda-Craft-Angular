import { Component } from '@angular/core';
import { Maqueta } from './Maqueta';

@Component({
  selector: 'app-lista-maquetas',
  standalone: false,
  templateUrl: './lista-maquetas.component.html',
  styleUrl: './lista-maquetas.component.scss'
})
export class ListaMaquetasComponent {

  maquetas: Maqueta [] = [
    {
    name : "Kamado Tanjiro",
    type : "Kimetsu no Yaiba",
    price : 500,
    stock : 3,
    image : "assets/img/tanjiro.jpg",
    onSale : false,
    quantity : 0
  },
  {
    name : "Zenitsu Agatsuma",
    type : "Kimetsu no Yaiba",
    price : 500,
    stock : 2,
    image : "assets/img/zenitsu.jpg",
    onSale : false,
    quantity : 0
  },
  {
    name : "Inosuke Hashibira",
    type : "Kimetsu no Yaiba",
    price : 500,
    stock : 5,
    image : "assets/img/inosuke.jpg",
    onSale : true,
    quantity : 0
  },
  {
    name : "Kamado Nezuko",
    type : "Kimetsu no Yaiba",
    price : 500,
    stock : 0,
    image : "assets/img/nezuko.jpg",
    onSale : false,
    quantity : 0
  }
];

constructor() {};
ngOnInit(): void {
}

maxReached(mensaje: String) {
  alert(mensaje);
}

}