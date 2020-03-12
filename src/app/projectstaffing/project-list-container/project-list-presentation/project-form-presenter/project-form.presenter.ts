import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Project } from 'src/app/projectstaffing/models/project';
@Injectable()
export class ProjectFormPresenter {

  projectForm: any;
  projectData:Project;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public buildForm(): FormGroup {
    return this.projectForm = this.formBuilder.group(
      {
        id:[''],
        projectName: [''],
        subProjectName: [''],
        clientName: [''],
        projectStartDate: [''],
        projectEndDate: [''],
        estimatedHours: [''],
        projectValue: [''],
        projectManagerName: ['']
      });
  }

  // public createProject() {
  //   this.projectData = new Project();
  //   this.projectData=this.projectForm.value;
  //   alert(JSON.stringify(this.projectData));
  // }
}
