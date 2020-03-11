import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListContainer } from './project-list-container/project-list.container';


const routes: Routes = [
  {
    path: '',
    component:ProjectListContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectstaffingRoutingModule { }
