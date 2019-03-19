import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/Project';
@Pipe({
  name: 'filterProject'
})
export class FilterProjectPipe implements PipeTransform {

  transform(projects: Array<Project>, projectSearch: string,priorityFromSearch: number, 
    priorityToSearch: number, dateFromSearch: Date, dateToSearch: Date){
      if (projects && projects.length){
        return projects.filter(projects =>{
            if (projectSearch && projects.projectName.toLowerCase().indexOf(projectSearch.toLowerCase()) == -1){
                return false;
            }
            if (priorityFromSearch && projects.priority >= priorityFromSearch == false){
                return false;
            }
            if (priorityToSearch && projects.priority <= priorityToSearch == false){
                return false;
            }
            let leftFrom = Number(new Date(dateFromSearch));
            let rightFrom = Number(new Date(projects.startDate));
            if (dateFromSearch && rightFrom >= leftFrom == false){
                return false;
            }
            let leftTo = Number(new Date(dateToSearch));
            let rightTo = Number(new Date(projects.endDate));
            if (dateToSearch && rightTo <= leftTo == false){
                return false;
            }
            return true;
       })
    }
    else{
        return projects;
    }
  }

}
