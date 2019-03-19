import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {  
  let service: TaskService;
  beforeEach(() => {    
    const injector = TestBed.configureTestingModule({
    imports: [HttpModule],
    providers: [      
      TaskService,
      MockBackend,
      BaseRequestOptions,
      {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
              return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions],
      }
    ]
  });
  TestBed.compileComponents();   
  service = injector.get(TaskService);
  });

  it('TaskService should return task details', async(inject([TaskService], (service: TaskService)=>{
    service.fetchTasks().then((value) => {
      expect(value.length).toBe(6);
    });
  })));

  it('TaskService should return task details for task 5', async(inject([TaskService], (service: TaskService)=>{
    service.fetchTask(5).then((value) => {
      expect(value.task).toBe("Task test 5");
    });
  })));

});
