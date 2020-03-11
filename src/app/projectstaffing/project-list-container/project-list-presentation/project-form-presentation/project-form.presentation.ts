import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { ProjectFormPresenter } from '../project-form-presenter/project-form.presenter';
import { FormGroup } from '@angular/forms';
import { Project } from 'src/app/projectstaffing/models/project';
import { PROJECT_DETAILS } from 'src/app/projectstaffing/token';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-project-form-presentation-ui',
  templateUrl: './project-form.presentation.html',
  styleUrls: ['./project-form.presentation.scss'],
  providers: [ ProjectFormPresenter ]
})
export class ProjectFormPresentation implements OnInit {

  @Output() public addProject: EventEmitter<Project>;
  
  projectForm:FormGroup;

  constructor(
    @Inject(PROJECT_DETAILS) public project: any,
    public overlayRef: OverlayRef,
    private projectFormPresenter:ProjectFormPresenter
  ) {
    this.addProject = new EventEmitter<Project>();
   }

  ngOnInit() {
    this.projectForm=this.projectFormPresenter.buildForm();
  }

  public onSubmit(): void {
    debugger
    this.overlayRef.dispose();
    this.addProject.emit(this.projectForm.value);
  }

}
