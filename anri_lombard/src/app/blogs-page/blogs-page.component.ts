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

  title = "Writing";

  Blogs: IBlogs[] = blogJson;

  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.meta.updateTag(
      {name: 'description', content: 'Writings about AI Ethics, Climate change technology, Biotechnology, Space exploration technology, and books'}
    );
    this.titleService.setTitle(this.title);
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  gotoPage($id: string) {
    this.router.navigate(['/blogs/', +$id]);
  }

}
