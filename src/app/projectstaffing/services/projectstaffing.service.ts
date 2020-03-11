import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'; 
@Injectable()
export class ProjectstaffingService {

  private apiUrl:string;
  public Project$: Observable<Project>;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl=environment.baseUrl;
   }

  public addProject(project: Project): Observable<Project> {
    debugger
    return this.http.post<Project>(`${this.apiUrl}`,project);
  }
}
