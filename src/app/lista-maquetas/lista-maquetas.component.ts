import { Component } from '@angular/core';
import { Maqueta } from './maqueta';

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
    onSale : false
  },
  {
    name : "Zenitsu Agatsuma",
    type : "Kimetsu no Yaiba",
    price : 500,
    stock : 2,
    image : "assets/img/.jpg",
    onSale : false
  },
  {
    name : "Inosuke Hashibira",
    type : "Kimetsu no Yaiba",
    price : 500,
    stock : 5,
    image : "assets/img/.jpg",
    onSale : true
  },
  {
    name : "Kamado Nezuko",
    type : "Kimetsu no Yaiba",
    price : 500,
    stock : 0,
    image : "assets/img/.jpg",
    onSale : false
  }
]

}
