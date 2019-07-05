import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from './dataservice/authentication.service';
import { Router } from '@angular/router';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP-Frontend';
  currentUser: any;

  constructor(@Inject(DOCUMENT) document, r: Renderer2, private router: Router,
    private authenticationService: AuthenticationService) {
    r.addClass(document.body, 'animsition');
    r.addClass(document.body, 'dashboard');
    r.addClass(document.body, 'site-menubar-unfold');


    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}