import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: User[] = [];

  constructor(public us: UsersService,
              public router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.us.getUsers().subscribe((dados: User[]) => {
      this.users = dados;
    });
  }

  removeUser(id: string){
    this.us.removeUser(id).subscribe(() => {
      this.ngOnInit();
    });
  }

}
