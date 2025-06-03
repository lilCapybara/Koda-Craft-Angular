import { Injectable } from '@angular/core';
import { Maqueta } from './lista-maquetas/Maqueta';
import { BehaviorSubject } from 'rxjs';

//Maneja la logica del carrito de compras
@Injectable({
  providedIn: 'root'
})
export class MaquetaCartService {

  constructor() { }

  private _cartList: Maqueta[] = [];  //_cartList es la variable que queremos observar
  cartList: BehaviorSubject<Maqueta[]> = new BehaviorSubject<Maqueta[]>([]);


  addToCart(maqueta: Maqueta){
    let item = this._cartList.find((v1) => v1.name === maqueta.name);
    if(!item){
      this._cartList.push({...maqueta});
    }else{
      item.quantity += maqueta.quantity;
    }
    
    console.log("Maqueta añadida al carrito:", maqueta);
    console.log("Carrito actual:", this._cartList);
    console.log("Cantidad de maquetas en el carrito:", this._cartList.length);

    this.cartList.next(this._cartList); //Notifica a los observadores que el carrito ha cambiado
                                        //Es equivalente al emit de eventos
  }

  removeFromCart(maqueta: Maqueta) {
    const index = this._cartList.findIndex((v1) => v1.name === maqueta.name);
    if (index !== -1) {
      this._cartList.splice(index, 1);
      this.cartList.next(this._cartList); // Notifica a los observadores que el carrito ha cambiado
      console.log("Maqueta eliminada del carrito:", maqueta);
    } else {
      console.log("Maqueta no encontrada en el carrito:", maqueta);
    }
  }

}
