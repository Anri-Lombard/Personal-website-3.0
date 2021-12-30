import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'anri_lombard';

  ngOnInit() {
    particlesJS.load('particles-js', '../assets/particles.json', null);
  }

  constructor(private router: Router) {

  }

  /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof MyComponent
   */
   hasRoute(route: string) {
    return this.router.url.includes(route);
  }


}
