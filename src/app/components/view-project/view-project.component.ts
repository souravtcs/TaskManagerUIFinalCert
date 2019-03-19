import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/Project';

import { ProjectService } from '../../services/project.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  projects: Array<Project> = []
  message:string = ''
  alertClass: string = "alert alert-success"

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects(){
    this.projectService.fetchProjects()
    .then((data)=>{
      console.log(data);

      // Convertdate using Moment JS - start
      //this.myForm.value.stStartDate = "01-Dec-2018";
      var dt = moment("2016-01-05").format('MM/DD/YYYY');
      console.log("myForm.value--> ", dt);
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          data[key].startDate = moment(data[key].startDate).format('MM/DD/YYYY');
          data[key].endDate = moment(data[key].endDate).format('MM/DD/YYYY'); 
        }
      }
      // Convertdate using Moment JS - end

      this.projects = data;
    })
  }
  deleteProject(index: number){
    this.projectService.deleteProject(index)
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      if(err.status == 410){
        this.alertClass = "alert alert-success"
        this.message = "Project deleted successfully!!"
      }
      console.log(err)});
  }

  updateProjectStatus(index: number){
    this.projectService.updateProjectStatus(index)
    .then((data)=>{
      console.log(data)
      if(data.status == 200){
        this.alertClass = "alert alert-success"
        this.message = "Project ended successfully!!"
        this.fetchProjects();
      }
    })
    .catch((err)=>{
        this.alertClass = "alert alert-danger"
        this.message = "Failed!!"
        console.log(err)});
  }
}
