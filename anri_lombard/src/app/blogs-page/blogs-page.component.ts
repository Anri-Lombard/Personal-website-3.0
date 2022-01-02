import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import paginationJson from '../../assets/pagination.json';

interface IPagination {
  pageNr: number;
}
@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent implements OnInit {

  activePageNumber = 1;
  maxPages = paginationJson.length;

  Pages: IPagination[] = paginationJson;



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

  pageActive(pageNr: number) {
    this.activePageNumber = pageNr;
  }

}
