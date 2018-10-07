import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export class User {
    nome: string;
    email: string;
    rg: string;
    endereco: string;
    telefone: string;
    password: string;
    admin: boolean;
    isActive: boolean
}

@Injectable()
export class UsersService {

    url: string = 'http://127.0.0.1:3000';
    
    constructor(public http: HttpClient){}

    getUsers(): Observable<User[]>{
        return this.http.get<User[]>(this.url + '/users');
    }

    getUserById(id: string): Observable<User>{
        return this.http.get<User>(this.url + '/users/' + id);
    }

    createUser(user: User): Observable<User>{
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        };
        return this.http.post<User>(this.url+'/users', user, httpOptions);
    }

    removeUser(id: string): Observable<any>{
        return this.http.delete(this.url + '/users/' + id);
    }

}