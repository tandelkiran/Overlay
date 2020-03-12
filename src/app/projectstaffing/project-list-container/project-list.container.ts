import { Component, OnInit } from '@angular/core';
import { ProjectstaffingService } from '../services/projectstaffing.service';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-list-container',
  templateUrl: './project-list.container.html',
  styleUrls: ['./project-list.container.scss'],
  providers: [ProjectstaffingService],
})
export class ProjectListContainer implements OnInit {

  projectData$: Observable<any>;
  // getProject:Observable<any>;

  constructor(private projectstaffingService: ProjectstaffingService) { }

  ngOnInit() {
    this.getProjects();
  }

  public getProjects(): void {
    this.projectData$ = this.projectstaffingService.getProjects();
  }

  public addPRJ(prj: Project): void {
    debugger
    this.projectstaffingService.addProject(prj).subscribe(data => {
      debugger
      if (data) {
        alert("Inserted");
        this.getProjects();
      }
    });
  }

  public updateProject(projectDetails: Project): void {
    debugger
    this.projectstaffingService.editProjectData(projectDetails, projectDetails.id).subscribe(data => {
      if (data) {
        debugger
        alert("In Update");
        this.getProjects();
      }
    });
  }
}
