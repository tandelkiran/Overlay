import { Injectable, Injector, ViewContainerRef, OnDestroy } from '@angular/core';
import { OverlayConfig, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { PROJECT_DETAILS } from '../../token';
import { ProjectFormPresentation } from '../project-list-presentation/project-form-presentation/project-form.presentation';
import { Subject } from 'rxjs';
import { Project } from '../../models/project';

@Injectable()
export class ProjectListPresenter implements OnDestroy {

  public addFormDetails: Subject<Project>;
  public updateFormDetails: Subject<Project>;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {
    this.addFormDetails = new Subject<Project>();
    this.updateFormDetails = new Subject<Project>();
  }

  private createInjector(projectDetails: Project, overlayRef: OverlayRef): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(OverlayRef, overlayRef);
    injectorTokens.set(PROJECT_DETAILS, projectDetails);
    return new PortalInjector(this.injector, injectorTokens);
  }

  createProjectForm(projectDetails: any): void {
    debugger
    this.viewContainerRef.clear();

    let config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    config.hasBackdrop = true;

    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });


    let ref = overlayRef.attach(new ComponentPortal(ProjectFormPresentation, this.viewContainerRef,
      this.createInjector(projectDetails, overlayRef)));

    debugger
    ref.instance.updateProject.subscribe((formData: Project) => {
      if (formData) {
        this.updateFormDetails.next(formData);
      }
    });

    debugger
    ref.instance.addProject.subscribe((formData: Project) => {
      if (formData) {
        debugger
        alert("FORMDATA:" + JSON.stringify(formData));
        this.addFormDetails.next(formData);
      }
    });
  }
  public ngOnDestroy(): void {
    this.addFormDetails.unsubscribe();
    this.updateFormDetails.unsubscribe();
  }
}
