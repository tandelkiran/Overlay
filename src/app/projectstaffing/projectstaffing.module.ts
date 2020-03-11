import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';

import { ProjectstaffingRoutingModule } from './projectstaffing-routing.module';
import { ProjectListContainer } from './project-list-container/project-list.container';
import { ProjectListPresentation } from './project-list-container/project-list-presentation/project-list.presentation';
import { ProjectFormPresentation } from './project-list-container/project-list-presentation/project-form-presentation/project-form.presentation';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProjectListContainer, ProjectListPresentation, ProjectFormPresentation],
  imports: [
    CommonModule,
    ProjectstaffingRoutingModule,
    OverlayModule,
    PortalModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents:[ProjectFormPresentation]
})
export class ProjectstaffingModule { }
