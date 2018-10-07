import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //módulos  de rotas que serão usados
import { FilmesComponent } from './filmes/filmes.component';
import { ErroComponent } from './erro/erro.component';
import { AdminUsersComponent } from './admin/users/users.component';
import { AdminFilmesComponent } from './admin/filmes/filmes.component';
import { LoginComponent } from './login/login.component';
import { FilmeComponent } from './filme/filme.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminSetupComponent } from './admin/setup/setup.component';
import { AdminNovofilmeComponent } from './admin/novofilme/novofilme.component';
import { UserComponent } from './user/user.component';

const rotas: Routes = [
    {path: '', redirectTo: '/filmes', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'users', component: UserComponent},
    {path: 'filmes', component: FilmesComponent},
    {path: 'filmes/:id', component: FilmeComponent},
    {path: 'admin', redirectTo: '/admin/dashboard', pathMatch: 'full'},
    {path: 'admin/dashboard', component: AdminDashboardComponent},
    {path: 'admin/users', component: AdminUsersComponent},
    {path: 'admin/filmes', component: AdminFilmesComponent},
    {path: 'admin/setup', component: AdminSetupComponent},
    {path: 'admin/filmes/novo', component: AdminNovofilmeComponent},
    {path: 'admin/filmes/:id', component: AdminSetupComponent},
    {path: '**', component: ErroComponent}
    
];

@NgModule({
    imports: [ RouterModule.forRoot(rotas) ], //import a conf de rotas e a configura
    exports: [ RouterModule ] // exporta as rotas para quem chamar
})

export class  AppRoutingModule { }