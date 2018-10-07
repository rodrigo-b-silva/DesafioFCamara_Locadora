//módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' //módulo de requisição http
import { FormsModule } from '@angular/forms';

//routas
import { AppRoutingModule } from './app-routing.module'; //arquivo de rotas

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminUsersComponent } from './admin/users/users.component';
import { AdminFilmesComponent } from './admin/filmes/filmes.component';
import { FilmesComponent } from './filmes/filmes.component';
import { AdminComponent } from './admin/admin.component';
import { ErroComponent } from './erro/erro.component';
import { LoginComponent } from './login/login.component';
import { FilmeComponent } from './filme/filme.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminSetupComponent } from './admin/setup/setup.component';
import { AdminNovofilmeComponent } from './admin/novofilme/novofilme.component';
import { UserComponent } from './user/user.component';

//services
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminUsersComponent,
    AdminFilmesComponent,
    FilmesComponent,
    AdminComponent,
    ErroComponent,
    LoginComponent,
    FilmeComponent,
    AdminDashboardComponent,
    AdminSetupComponent,
    AdminNovofilmeComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
