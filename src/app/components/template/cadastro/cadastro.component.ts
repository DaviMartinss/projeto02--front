import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  users: User[] = [];
  
  constructor(private userService : UserService) { }
  

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  add(username: string, userEmail: string, userGenero: string, userSenha: string): void {
    username = username.trim();
    if (!username) { return; }

    this.userService.addUser({ username} as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

}