import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import {ActivatedRoute} from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  myForm: FormGroup
  message:string = ''
  alertClass: string = "alert alert-success"

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
      if(params.id){
        this.fetchUser(params.id) 
      }
    });
  }

  fetchUser(id: number){
    this.userService.fetchUser(id)
    .then(data => {
      console.log(data);
      this.myForm.controls['userId'].setValue(data.userId)
      this.myForm.controls['name'].setValue( data.name);
      this.myForm.controls['employeeId'].setValue( data.employeeId);
      this.myForm.controls['projectName'].setValue(data.projectName);
      this.myForm.controls['taskName'].setValue( data.taskName);
      this.myForm.controls['userStatus'].setValue( data.userStatus);
    })
  }

  ngOnInit() {
    this.myForm = new FormGroup({  
      'userId': new FormControl(''),   
      'name': new FormControl(''),  
      'employeeId': new FormControl('', Validators.required),
      'projectName': new FormControl('', Validators.required),
      'taskName': new FormControl('', Validators.required),
      'userStatus': new FormControl(1)
    })
    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
  }

  onSubmit() {
    this.userService.addUser(this.myForm.value)
    .then((res) => {
      console.log(res.status)
      if(res.status == 200){
        this.alertClass = "alert alert-success"
        this.message = "User added successfully!!"
      }
    })
    .catch((res) =>{
      console.log(res.status)
      if(res.status == 409){
        this.alertClass = "alert alert-danger"
        this.message = "User already exists!!"
      }
    })
  }

  updateUser() {
    this.userService.updateUser(this.myForm.value)
    .then((res) => {
      console.log(res.status)
      if(res.status == 200 ){
        this.alertClass = "alert alert-success"
        this.message = "User updated successfully!!"
      }
    })
  }

  resetUser() {
    this.myForm.reset();
    this.myForm.controls['userId'].setValue('');
    this.myForm.controls['name'].setValue('');
    this.myForm.controls['employeeId'].setValue('');
    this.myForm.controls['projectName'].setValue('');
    this.myForm.controls['taskName'].setValue('');
    this.myForm.controls['userStatus'].setValue('');
  }
}