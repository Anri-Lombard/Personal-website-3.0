// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from './project';

import projectData from './data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects: IProject[] = projectData;

  constructor() {

  }

  getProjects() {
    return this.projects;
  }
}
