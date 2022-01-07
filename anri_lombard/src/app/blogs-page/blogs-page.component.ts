import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import blogJson from '../../assets/blogs.json';
import { Router } from '@angular/router';

interface IBlogs {
  id: string;
  type: string;
  date: string;
  heading: string;
  description: string;
}
@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent implements OnInit {

  Blogs: IBlogs[] = blogJson;

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
  ) {
    this.meta.addTags([
      {name: 'description', content: 'The blog of Anri Lombard'},
      {name: 'author', content: 'Anri Lombard'},
      {name: 'keywords', content: 'Anri Lombard, blog'}
    ]);
    this.setTitle('Writing')
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  gotoPage($id: string) {
    this.router.navigate(['/blogs/', +$id]);
  }

}
