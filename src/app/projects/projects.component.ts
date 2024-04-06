import { Component } from '@angular/core';
import { Project, projects } from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Array<Project> = projects;
  displayedProjects: Array<Project> = [];
  initialDisplayCount = 2; 
  incrementCount = 1; 
  allProjectsDisplayed = false;

  ngOnInit(){
    this.displayedProjects = this.projects.slice(0, this.initialDisplayCount);
    this.allProjectsDisplayed = this.initialDisplayCount >= this.projects.length;
  }

  loadMoreProjects(){
    const nextProjects = this.projects.slice(this.displayedProjects.length, this.displayedProjects.length + this.incrementCount);
    this.displayedProjects.push(...nextProjects);
    this.allProjectsDisplayed = this.displayedProjects.length >= this.projects.length;
  }

}
