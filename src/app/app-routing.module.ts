import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { BlogExpandedComponent } from './blog-expanded/blog-expanded.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'blogs', component: BlogsPageComponent },
  { path: 'projects/:projectId', component: ProjectDetailsComponent},
  { path: 'blogs/:blogId', component: BlogExpandedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
