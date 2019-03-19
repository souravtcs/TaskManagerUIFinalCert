import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  fetchUsers(): Promise<any>{
    return this.http.get('http://localhost:54669/api/User/GetUsers').toPromise()
    .then(res=>res.json())
  }
  fetchUser(id: number): Promise<any>{
    return this.http.get('http://localhost:54669/api/User/GetUserById/'+id).toPromise()
    .then(res=>res.json())
  }
  updateUser(project:User){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let data=JSON.stringify(project);

    return this.http.post('http://localhost:54669/api/User/UpdateUser/', data, options).toPromise()
  }

  addUser(project:User): Promise<any>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let data=JSON.stringify(project);

    return this.http.post('http://localhost:54669/api/User/CreateUser/', data, options).toPromise()
  }

  deleteUser(index:number): Promise<any>{
    return this.http.delete('http://localhost:54669/api/User/DeleteUser/'+index).toPromise()
  }

  updateUserStatus(index:number): Promise<any>{
    return this.http.delete('http://localhost:54669/api/User/updateUserStatus/'+index).toPromise()
  }
}
