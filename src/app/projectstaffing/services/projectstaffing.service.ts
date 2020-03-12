import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class ProjectstaffingService {

  private apiUrl: string;
  public Project$: Observable<Project>;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.baseUrl;
  }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}`);
  }

  public getProjectById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}`, project);
  }

  public editProjectData(project: Project, id: number): Observable<Project> {
    debugger
    return this.http.patch<Project>(`${this.apiUrl}/${id}`, project);
  }
}
