import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import projectsJson from '../../assets/projects.json';

interface IProject {
  id: number;
  type: string;
  title: string;
  imagePath: string;
  date: string;
  projectSummary: string;
  skillSummary: string;
  hasGitLink: boolean;
  gitLink: string;
  hasWebLink: boolean;
  webLink: string;
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  title = "Anri Lombard - Projects";

  Projects: IProject[] = projectsJson;
  bullocks = false;

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {

  }

  ngOnInit(): void {
    // this.meta.updateTag(
    //   {name: 'description', content: 'Projects based on web/app development, game/VR development, and machine learning'}
    // );
    this.titleService.setTitle(this.title);
  }

}
