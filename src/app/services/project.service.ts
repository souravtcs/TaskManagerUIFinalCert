import { Injectable } from '@angular/core';
import { Project } from '../model/Project';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  constructor(private http: Http) { }

  fetchProjects(): Promise<any>{
    return this.http.get('http://localhost:54669/api/Project/GetProjects').toPromise()
    .then(res=>res.json())
  }
  fetchProject(id: number): Promise<any>{
    return this.http.get('http://localhost:54669/api/Project/GetProjectById/'+id).toPromise()
    .then(res=>res.json())
  }
  updateProject(project:Project){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let data=JSON.stringify(project);

    return this.http.post('http://localhost:54669/api/Project/UpdateProject/', data, options).toPromise()
  }

  addProject(project:Project): Promise<any>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let data=JSON.stringify(project);

    return this.http.post('http://localhost:54669/api/Project/CreateProject/', data, options).toPromise()
  }

  deleteProject(index:number): Promise<any>{
    return this.http.delete('http://localhost:54669/api/Project/DeleteProject/'+index).toPromise()
  }

  updateProjectStatus(index:number): Promise<any>{
    return this.http.delete('http://localhost:54669/api/Project/updateProjectStatus/'+index).toPromise()
  }
}
