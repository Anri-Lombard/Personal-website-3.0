import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import blogJson from '../../assets/blogs.json';

interface IBlogs {
  id: string;
  type: string;
  date: string;
  heading: string;
  description: string;
}

@Component({
  selector: 'app-blog-expanded',
  templateUrl: './blog-expanded.component.html',
  styleUrls: ['./blog-expanded.component.scss']
})
export class BlogExpandedComponent implements OnInit {

  Blogs: IBlogs[] = blogJson;

  blogId = this.route.snapshot.paramMap.get('blogId');
  pdfSrc = "assets/pdf/" + this.blogId + ".pdf";

  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute
  ) {
    this.meta.addTags([
      {name: 'description', content: 'The blog of Anri Lombard'},
      {name: 'author', content: 'Anri Lombard'},
      {name: 'keywords', content: 'Anri Lombard, blog'}
    ]);
    this.setTitle('Blog')
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
