import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFormPresentation } from './project-form.presentation';

describe('ProjectFormPresentation', () => {
  let component: ProjectFormPresentation;
  let fixture: ComponentFixture<ProjectFormPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFormPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
