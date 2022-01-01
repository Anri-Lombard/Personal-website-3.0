import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { projects } from '../project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects = projects;

  constructor(
    private meta: Meta,
    private title: Title,
  ) {

    this.meta.addTags([
      {name: 'description', content: 'The projects of Anri Lombard'},
      {name: 'author', content: 'Anri Lombard'},
      {name: 'keywords', content: 'Anri Lombard, projects'}
    ]);
    this.setTitle('Project Page')
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
