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

  title = "Anri Lombard - Writing";

  constructor(
    private meta: Meta,
    private titleService: Title,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    // this.meta.updateTag(
    //   {name: 'description', content: 'Anri Lombard\'s Writing'}
    // );
    this.titleService.setTitle(this.title);
  }

}
