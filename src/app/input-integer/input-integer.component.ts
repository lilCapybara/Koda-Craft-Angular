import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maqueta } from '../lista-maquetas/Maqueta';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})


export class InputIntegerComponent {

  constructor() {};

  @Input({ required: true })
  quantity!: number;

  @Input({ required: true })
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  upQuantity() : void {
  if (this.quantity < this.max) {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }else{
    this.maxReached.emit("Se alcanzo el maximo de unidades disponibles");
  }
}

downQuantity() : void {
  if (this.quantity > 0) {
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
}



}
