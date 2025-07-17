import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMaquetasComponent } from './lista-maquetas/lista-maquetas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KodaCraftAboutComponent } from './koda-craft-about/koda-craft-about.component';
import { KodaCraftMaquetasComponent } from './koda-craft-maquetas/koda-craft-maquetas.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMaquetasComponent,
    KodaCraftAboutComponent,
    KodaCraftMaquetasComponent,
    CartComponent,
    InputIntegerComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
