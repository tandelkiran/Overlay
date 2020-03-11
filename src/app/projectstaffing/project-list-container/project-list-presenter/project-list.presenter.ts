import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { OverlayConfig, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { PROJECT_DETAILS } from '../../token';
import { ProjectFormPresentation } from '../project-list-presentation/project-form-presentation/project-form.presentation';
import { Subject } from 'rxjs';
import { Project } from '../../models/project';

@Injectable()
export class ProjectListPresenter {

  public addFormDetails:Subject<Project>;

  constructor(
    private overlay: Overlay,
    private viewContainerRef:ViewContainerRef,
    private injector: Injector
  ) 
  { 
    this.addFormDetails= new Subject<Project>();
  }

  private createInjector(projectDetails: Project, overlayRef: OverlayRef): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(OverlayRef, overlayRef);
    injectorTokens.set(PROJECT_DETAILS, projectDetails);
    return new PortalInjector(this.injector, injectorTokens);
  }

  createProjectForm(projectDetails: any) {
    debugger
    this.viewContainerRef.clear();

    let config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
      
    config.hasBackdrop = true;

    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() =>{
      overlayRef.dispose();
    });


    let ref=overlayRef.attach(new ComponentPortal(ProjectFormPresentation, this.viewContainerRef,
      this.createInjector(projectDetails, overlayRef)));

    alert("project list ts"+JSON.stringify(ref.instance.projectForm.value));

    ref.instance.addProject.subscribe((formData: Project) => {
      if (formData) {
        debugger
      alert("FORMDATA:"+JSON.stringify(formData));
        this.addFormDetails.next(formData);
      }
    })

    return this.addFormDetails.asObservable();

    // return ref.instance.projectForm.value;
    // return overlayRef;
  }
}
