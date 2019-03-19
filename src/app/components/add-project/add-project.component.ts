import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from '../../services/project.service';
import {ActivatedRoute} from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  myForm: FormGroup
  message:string = ''
  alertClass: string = "alert alert-success"

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
      if(params.id){
        this.fetchProjects(params.id) 
      }
    });
  }

  fetchProjects(id: number){
    this.projectService.fetchProject(id)
    .then(data => {
      console.log(data);
      var startDate = moment(data.startDate).format('YYYY-MM-DD');
      var endDate = moment(data.endDate).format('YYYY-MM-DD');
      console.log('Date is :', startDate);
      this.myForm.controls['projectId'].setValue(data.projectId)
      this.myForm.controls['projectName'].setValue( data.projectName);
      this.myForm.controls['priority'].setValue( data.priority);
      this.myForm.controls['startDate'].setValue( startDate);
      this.myForm.controls['endDate'].setValue( endDate);
      this.myForm.controls['projectStatus'].setValue( data.projectStatus);
    })
  }

  ngOnInit() {
    this.myForm = new FormGroup({  
      'projectId': new FormControl('' ),   
      'projectStatus': new FormControl(1),  
      'projectName': new FormControl('', Validators.required),
      'startDate': new FormControl('', Validators.required),
      'endDate': new FormControl('', Validators.required),
      'priority': new FormControl(0, Validators.required)
    })

    this.myForm.statusChanges.subscribe((data: any) => console.log(data));
  }

  onSubmit() {
    console.log("myForm--> " + this.myForm);
    console.log("myForm.value--> ", this.myForm.value);
    //this.myForm.value.stStartDate = "01-Dec-2018";
    //this.myForm.value.stStartDate = moment(this.myForm.value.stStartDate).format('MM/DD/YYYY');
    //console.log("myForm.value--> ", this.myForm.value);
    this.projectService.addProject(this.myForm.value)
    .then((res) => {
      console.log(res.status)
      if(res.status == 200){
        this.alertClass = "alert alert-success"
        this.message = "Project added successfully!!"
      }
    })
    .catch((res) =>{
      console.log(res.status)
      if(res.status == 409){
        this.alertClass = "alert alert-danger"
        this.message = "Project already exists!!"
      }
    })
  }

  updateProject() {
    console.log(this.myForm);
    console.log(this.myForm.value);
    this.projectService.updateProject(this.myForm.value)
    .then((res) => {
      console.log(res.status)
      if(res.status == 200 ){
        this.alertClass = "alert alert-success"
        this.message = "Project updated successfully!!"
      }
    })
  }

  resetProject() {
    this.myForm.reset();
    this.myForm.controls['projectId'].setValue('');
    this.myForm.controls['projectName'].setValue('');
    this.myForm.controls['priority'].setValue(0);
    this.myForm.controls['startDate'].setValue('');
    this.myForm.controls['endDate'].setValue('');
  }
}
