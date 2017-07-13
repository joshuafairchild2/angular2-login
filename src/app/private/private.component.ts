import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  providers: [AuthenticationService]
})
export class PrivateComponent implements OnInit {

  loggedInUsername: string = null;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authService.checkCredentials();

    this.loggedInUsername = this.authService.getLoggedInUsername();
  }

  logout(): void {
    this.authService.logout();
  }

}
