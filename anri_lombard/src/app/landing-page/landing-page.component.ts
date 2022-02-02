import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  title = "Summary";

  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.meta.updateTag(
      {name: 'description', content: 'Navigate to Resume, Projects, and Writings'}
    );
    this.titleService.setTitle(this.title);
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

