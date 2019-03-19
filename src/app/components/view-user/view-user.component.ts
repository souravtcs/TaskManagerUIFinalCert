import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

import { UserService } from '../../services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: Array<User> = []
  message:string = ''
  alertClass: string = "alert alert-success"

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers(){
    this.userService.fetchUsers()
    .then((data)=>{
      this.users = data;
      console.log(this.users);
    })
  }

  deleteTask(index: number){
    this.userService.deleteUser(index)
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      if(err.status == 410){
        this.alertClass = "alert alert-success"
        this.message = "User deleted successfully!!"
      }
      console.log(err)});
  }

  updateUserStatus(index: number){
    this.userService.updateUserStatus(index)
    .then((data)=>{
      console.log(data)
      if(data.status == 200){
        this.alertClass = "alert alert-success"
        this.message = "User ended successfully!!"
        this.fetchUsers();
      }
    })
    .catch((err)=>{
        this.alertClass = "alert alert-danger"
        this.message = "Failed!!"
        console.log(err)});
  }

}
