import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //módulos  de rotas que serão usados

const rotas: Routes = [
    {path: '', redirectTo: '/bolinha', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(rotas) ], //import a conf de rotas e a configura
    exports: [ RouterModule ] // exporta as rotas para quem chamar
})

export class  AppRoutingModule { }