import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
  constructor(private http: Http) { }

  fetchTasks(): Promise<any>{
    return this.http.get('http://localhost:54669/api/Task/GetTasks').toPromise()
    .then(res=>res.json())
  }
  fetchTask(id: number): Promise<any>{
    return this.http.get('http://localhost:54669/api/Task/GetTaskById/'+id).toPromise()
    .then(res=>res.json())
  }
  updateTask(task:Task){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let data=JSON.stringify(task);

    return this.http.post('http://localhost:54669/api/Task/UpdateTask/', data, options).toPromise()
  }

  addTask(task:Task): Promise<any>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let data=JSON.stringify(task);

    return this.http.post('http://localhost:54669/api/Task/CreateTask/', data, options).toPromise()
  }

  deleteTask(index:number): Promise<any>{
    return this.http.delete('http://localhost:54669/api/Task/DeleteTask/'+index).toPromise()
  }

  updateTaskStatus(index:number): Promise<any>{
    return this.http.delete('http://localhost:54669/api/Task/updateTaskStatus/'+index).toPromise()
  }
}
