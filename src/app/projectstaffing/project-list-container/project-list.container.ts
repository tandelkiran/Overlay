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

  projectData:Observable<Project>;
  constructor(private projectstaffingService : ProjectstaffingService) { }

  ngOnInit() {
  }

  public addPRJ(prj:Project):void {
    debugger
    this.projectstaffingService.addProject(prj).subscribe(data=>
      {
        debugger
        if(data){
            alert("Inserted");
        }
      });
  }
}
