import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListPresentation } from './project-list.presentation';

describe('ProjectListPresentation', () => {
  let component: ProjectListPresentation;
  let fixture: ComponentFixture<ProjectListPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
