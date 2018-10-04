import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //módulos  de rotas que serão usados

import { BolaComponent } from './bola.component';
import { ErroComponent } from './erro.component';
import { CarroComponent } from './carro.component';

const rotas: Routes = [
    {path: '', redirectTo: '/bolinha', pathMatch: 'full'},
    {path: 'bolinha', component: BolaComponent},
    {path: 'carrinho', component: CarroComponent},
    {path: '**', component: ErroComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(rotas) ], //import a conf de rotas e a configura
    exports: [ RouterModule ] // exporta as rotas para quem chamar
})

export class  AppRoutingModule { }