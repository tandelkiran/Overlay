import { Component, OnInit } from '@angular/core';
import { ProjectFormPresenter } from '../project-form-presenter/project-form.presenter';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-form-presentation-ui',
  templateUrl: './project-form.presentation.html',
  styleUrls: ['./project-form.presentation.scss'],
  providers: [ ProjectFormPresenter ]
})
export class ProjectFormPresentation implements OnInit {

  projectForm:FormGroup;

  constructor(
    private projectFormPresenter:ProjectFormPresenter
  ) { }

  ngOnInit() {
    this.projectForm=this.projectFormPresenter.buildForm();
  }

  // onSubmit()
  // {
  //   this.projectFormPresenter.createProject();
  //   // alert(JSON.stringify(this.projectForm.value));
  // }
  public onSubmit(): void {
    this.overlayRef.dispose();
    this.updatedDocument.emit(this.documentFormDetails.value);
  }

}
