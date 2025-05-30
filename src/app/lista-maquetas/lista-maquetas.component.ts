import { Component } from '@angular/core';
import { Maqueta } from './Maqueta';
import { MaquetaCartService } from '../maqueta-cart.service';
import { MaquetaDataService } from '../maqueta-data.service';

@Component({
  selector: 'app-lista-maquetas',
  standalone: false,
  templateUrl: './lista-maquetas.component.html',
  styleUrl: './lista-maquetas.component.scss'
})
export class ListaMaquetasComponent {

  maquetas: Maqueta [] = [];

//Nunca debo hacer un new de un servicio, siempre inyecto
//en el constructor, Angular se encarga de crear la instancia del servicio
constructor(  
  private cart : MaquetaCartService,
  private maquetaDataService: MaquetaDataService
) {
  
};

ngOnInit(): void {
  this.maquetaDataService.getAll()
  .subscribe(maquetas => this.maquetas = maquetas);
}

addToCart(maqueta: Maqueta): void {
  this.cart.addToCart(maqueta);
  maqueta.stock -= maqueta.quantity;
  maqueta.quantity = 0;
}

maxReached(mensaje: String) {
  alert(mensaje);
}

}