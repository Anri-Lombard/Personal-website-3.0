import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  title = "Anri Lombard - About";

  real = false;

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {

  }

  ngOnInit(): void {
    // this.meta.updateTag(
    //   {name: 'description', content: 'Anri Lombard\'s Background, Experience, and Skills'}
    // );
    this.titleService.setTitle(this.title);
  }

}
