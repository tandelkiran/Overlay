import { Component, OnInit, ViewContainerRef, Input, EventEmitter, Output } from '@angular/core';
import { ProjectListPresenter } from '../project-list-presenter/project-list.presenter';

import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ProjectFormPresentation } from './project-form-presentation/project-form.presentation';
import { Project } from '../../models/project';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-project-list-presentation-ui',
  templateUrl: './project-list.presentation.html',
  styleUrls: ['./project-list.presentation.scss'],
  providers: [ProjectListPresenter]
})
export class ProjectListPresentation implements OnInit {

  pData: any;

  // @Input() projectData;

  @Input() set projectData(value: Project[]) {
    if (value) {
      this.project = value;
    }
  }
  get projectData() {
    return this.project;
  }

  @Output() public addProject: EventEmitter<Project>;
  // @Output() public updatedProject: EventEmitter<any>;

  private project: Project[];
  private updatedDetails: Project;

  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    private projectListPresenter: ProjectListPresenter
  ) {
    this.addProject = new EventEmitter();
    // this.updatedProject = new EventEmitter();
  }

  ngOnInit() {
  }

  create(project: Project) {
    debugger

    this.projectListPresenter.createProjectForm(project);

    this.projectListPresenter.addFormDetails.subscribe((data:any)=>
    {
      debugger
      this.updatedDetails=data;
      this.addProject.emit(this.updatedDetails);
    });
  }

}
