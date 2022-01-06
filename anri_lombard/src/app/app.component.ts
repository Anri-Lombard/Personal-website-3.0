import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var particlesJS: any;

interface cachedImage {
  url: string;
  blob: Blob;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    particlesJS.load('particles-js', '../assets/particles.json', null);
  }

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
  ) {

    this.meta.addTags([
      {name: 'description', content: 'The Website Of Anri Lombard'},
      {name: 'author', content: 'Anri Lombard'},
      {name: 'keywords', content: 'Anri Lombard, personal, website, UCT, Machine Learning, Deeplearning.AI'}
    ]);
    this.setTitle('Anri Lombard')
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
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
