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
  providers: [ProjectFormPresenter]
})
export class ProjectFormPresentation implements OnInit {

  @Output() public addProject: EventEmitter<Project>;
  @Output() public updateProject: EventEmitter<Project>;

  projectForm: FormGroup;

  constructor(
    @Inject(PROJECT_DETAILS) public project: Project,
    public overlayRef: OverlayRef,
    private projectFormPresenter: ProjectFormPresenter
  ) {
    this.addProject = new EventEmitter<Project>();
    this.updateProject = new EventEmitter<Project>();
  }

  ngOnInit() {
    this.projectForm = this.projectFormPresenter.buildForm();

    if(this.project != null){
      this.projectForm.patchValue(this.project);
    }
  }

  get projectFormControls() {
    return this.projectForm.controls;
  }

  public onSubmit(): void {
    debugger
    this.overlayRef.dispose();
    if (this.projectForm.controls.id.value !== "") {
      debugger
      this.updateProject.emit(this.projectForm.value);
    }
    else{
      debugger
      this.addProject.emit(this.projectForm.value);
    }
  }

}
