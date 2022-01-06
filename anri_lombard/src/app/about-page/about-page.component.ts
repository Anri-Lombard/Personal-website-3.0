import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  real = false;

  constructor(
    private meta: Meta,
    private title: Title,
    ) {
      this.meta.addTags([
        {name: 'description', content: 'About Anri Lombard'},
        {name: 'author', content: 'Anri Lombard'},
        {name: 'keywords', content: 'Anri Lombard, about, experience'}
      ]);
      this.setTitle('About')
    }
    public setTitle(newTitle: string) {
      this.title.setTitle(newTitle);
    }

    ngOnInit(): void {
  }

}
