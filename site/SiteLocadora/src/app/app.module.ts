import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http' //módulo de requisição http
//routas
import { AppRoutingModule } from './app-routing.module'; //arquivo de rotas

import { AppComponent } from './app.component';
import { CarroComponent } from './carro.component';
import { BolaComponent } from './bola.component';
import { ErroComponent } from './erro.component';

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    BolaComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
