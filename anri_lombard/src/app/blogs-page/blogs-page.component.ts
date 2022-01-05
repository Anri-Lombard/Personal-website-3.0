import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
<<<<<<< HEAD

interface IPagination {
  pageNr: number;
=======
import blogJson from '../../assets/blogs.json';

interface IBlogs {
  id: number;
  type: string;
  date: string;
  heading: string;
  description: string;
>>>>>>> blogs
}
@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent implements OnInit {

<<<<<<< HEAD

=======
  Blogs: IBlogs[] = blogJson;
>>>>>>> blogs

  constructor(
    private meta: Meta,
    private title: Title,
  ) {
    this.meta.addTags([
      {name: 'description', content: 'The blog of Anri Lombard'},
      {name: 'author', content: 'Anri Lombard'},
      {name: 'keywords', content: 'Anri Lombard, blog'}
    ]);
    this.setTitle('Blogs')
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  scrollToElement($element): void {
=======
  scrollToElement($element: any): void {
>>>>>>> blogs
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
