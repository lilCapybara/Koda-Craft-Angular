import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMaquetasComponent } from './lista-maquetas/lista-maquetas.component';
import { FormsModule } from '@angular/forms';
import { KodaCraftAboutComponent } from './koda-craft-about/koda-craft-about.component';
import { KodaCraftMaquetasComponent } from './koda-craft-maquetas/koda-craft-maquetas.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMaquetasComponent,
    KodaCraftAboutComponent,
    KodaCraftMaquetasComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
