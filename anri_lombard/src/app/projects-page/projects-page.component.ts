import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import projectsJson from '../../assets/projects.json';

interface IProject {
  id: number;
  title: string;
  imagePath: string;
  date: string;
  projectSummary: string;
  skillSummary: string;
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  Projects: IProject[] = projectsJson;
  bullocks = false;

  constructor(
    private meta: Meta,
    private title: Title,
  ) {
    console.log(this.Projects);

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
