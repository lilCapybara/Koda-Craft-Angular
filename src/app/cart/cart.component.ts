import { Component } from '@angular/core';
import { MaquetaCartService } from '../maqueta-cart.service';
import { Maqueta } from '../lista-maquetas/Maqueta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  removeFromCart(maqueta: Maqueta): void {
    this.cart.removeFromCart(maqueta);
  }

  cartList$ : Observable<Maqueta[]>;
  constructor(private cart : MaquetaCartService) { 
    this.cartList$ = this.cart.cartList.asObservable();
  }

  ngOnInit(): void {
    
  }

  
}
