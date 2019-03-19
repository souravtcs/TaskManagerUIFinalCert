import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/User';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: Array<User>, userSearch: string, projectSearch: string,
    taskSearch: string) {      
      if (users && users.length){
        return users.filter(user =>{
          if (userSearch && user.name.toLowerCase().indexOf(userSearch.toLowerCase()) == -1){
            return false;
          }
          if (projectSearch && user.projectName.toLowerCase().indexOf(projectSearch.toLowerCase()) == -1){
            return false;
          }
          if (taskSearch && user.taskName.toLowerCase().indexOf(taskSearch.toLowerCase()) == -1){
            return false;
          }
          return true;
        })
      }    
    else{
      return users;
    }
  }
}
