import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();

  constructor(public us: UsersService,
              public as: ActivatedRoute,
              public router: Router) {
    const id = this.as.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  /*
  getUserById(id: string){
    this.us.getUserById(id).subscribe((dado) => {
      this.user = dado;
    });
  }
*/

  createUser(){
    this.us.createUser(this.user).subscribe((dado) => {
      this.router.navigate(['/login']);
    });
  }

}
