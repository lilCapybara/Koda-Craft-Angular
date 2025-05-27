import { Injectable } from '@angular/core';
import { Maqueta } from './lista-maquetas/Maqueta';

//Maneja la logica del carrito de compras
@Injectable({
  providedIn: 'root'
})
export class MaquetaCartService {

  constructor() { }

  cartList: Maqueta[] = [];

  addToCart(maqueta: Maqueta){
    let item = this.cartList.find((v1) => v1.name === maqueta.name);
    if(!item){
      this.cartList.push({...maqueta});
    }else{
      item.quantity += maqueta.quantity;
    }
    
    console.log("Maqueta añadida al carrito:", maqueta);
    console.log("Carrito actual:", this.cartList);
    console.log("Cantidad de maquetas en el carrito:", this.cartList.length);
  }

}
