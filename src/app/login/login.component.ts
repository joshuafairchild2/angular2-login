import { Component, OnInit } from '@angular/core';
import { User } from './../user.model';
import { AuthenticationService } from './../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  tmpUser: User = new User('','');
  errorMsg: string = null;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login() {
    if(!this.authService.login(this.tmpUser)) {
      this.errorMsg = 'Failed to login';
    }
  }

}
