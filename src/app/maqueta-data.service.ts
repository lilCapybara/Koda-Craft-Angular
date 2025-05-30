import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Maqueta } from './lista-maquetas/Maqueta';

const URL = 'https://6838dac26561b8d882ae5dbb.mockapi.io/KodaCraft/Maquetas';

@Injectable({
  providedIn: 'root'
})
export class MaquetaDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Maqueta[]>{
    //fetch('https://api.example.com/maquetas') devuelve una promesa
    return this.http.get<Maqueta[]>(URL) //Devuelve un observable
    .pipe(  //pipe permite transformar el observable
      tap((maquetas:Maqueta[]) => maquetas.forEach(maqueta => maqueta.quantity = 0)) //tap permite ejecutar una función con los datos que recibe el observable
    );                                                                               //En este caso, inicializa la cantidad de cada maqueta a 0
  }
}
