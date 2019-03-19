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
import { ProjectService } from './project.service';

describe('TaskService', () => {  
  let service: ProjectService;
  beforeEach(() => {    
    const injector = TestBed.configureTestingModule({
    imports: [HttpModule],
    providers: [      
      ProjectService,
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
  service = injector.get(ProjectService);
  });

  it('ProjectService should return project details', async(inject([ProjectService], (service: ProjectService)=>{
    service.fetchProjects().then((value) => {
      expect(value.length).toBe(2);
    });
  })));

  it('ProjectService should return task details for project 2', async(inject([ProjectService], (service: ProjectService)=>{
    service.fetchProject(2).then((value) => {
      expect(value.projectName).toBe("Project 2 update");
    });
  })));

});
