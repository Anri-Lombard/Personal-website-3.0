import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
  ) {
    this.meta.addTags([
      {name: 'description', content: 'The personal website of Anri Lombard'},
      {name: 'author', content: 'Anri Lombard'},
      {name: 'keywords', content: 'Anri Lombard, UCT'}
    ]);
    this.setTitle('Home')
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

  // TODO: add these gotos to a cart for the entire website to use

  gotoAbout() {
    this.router.navigate(['/about']);
  }

  gotoProjects() {
    this.router.navigate(['/projects'])
  }

  gotoBlogs() {
    this.router.navigate(['/blogs'])
  }


}

