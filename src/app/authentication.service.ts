import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

//pretend these come from a database
const users = [
  new User('jfairchild', '123'),
  new User('joshua', '456')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private router: Router
  ) {}

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }


  login(currentUser: User): boolean {
    const authenticatedUser: User = users.find(user => user.username === currentUser.username);

    if(authenticatedUser && authenticatedUser.password === currentUser.password) {
      localStorage.setItem('username', authenticatedUser.username);
      localStorage.setItem('password', authenticatedUser.password);
      this.router.navigate(['']);
      return true;
    } else return false;
  }

  checkCredentials(): void {
    if (!localStorage.getItem('username') || !localStorage.getItem('password')) {
      this.router.navigate(['login']);
    }
  }

  getLoggedInUsername(): string {
    return localStorage.getItem('username');
  }
}
