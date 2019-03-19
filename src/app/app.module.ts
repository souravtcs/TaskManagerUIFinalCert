import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddProjectComponent } from './components/add-project/add-project.component';

import { ViewTasksComponent } from './components/view-tasks/view-tasks.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

import { FilterTaskPipe } from './pipes/filter-task.pipe';
import { FilterProjectPipe } from './pipes/filter-project.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';

const routes = [
  {path:"", component: ViewTasksComponent},
  {path:"addTask", component: AddTaskComponent},
  {path:"editTask/:id", component: AddTaskComponent},
  {path:"viewProject", component: ViewProjectComponent},
  {path:"addProject", component: AddProjectComponent},
  {path:"editProject/:id", component: AddProjectComponent},
  {path:"viewUser", component: ViewUserComponent},
  {path:"addUser", component: AddUserComponent},
  {path:"editUser/:id", component: AddUserComponent},
]
@NgModule({
  declarations: [
    AppComponent
    , ViewTasksComponent, ViewProjectComponent, ViewUserComponent
    , AddTaskComponent, AddUserComponent, AddProjectComponent
    , FilterTaskPipe, FilterProjectPipe, FilterUserPipe
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule , RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [TaskService, ProjectService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
