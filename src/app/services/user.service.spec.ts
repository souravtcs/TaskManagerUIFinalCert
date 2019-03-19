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
import { UserService } from './user.service';

describe('TaskService', () => {  
  let service: UserService;
  beforeEach(() => {    
    const injector = TestBed.configureTestingModule({
    imports: [HttpModule],
    providers: [      
        UserService,
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
  service = injector.get(UserService);
  });

  it('UserService should return user details', async(inject([UserService], (service: UserService)=>{
    service.fetchUsers().then((value) => {
      expect(value.length).toBe(2);
    });
  })));

  it('UserService should return task details for user 2', async(inject([UserService], (service: UserService)=>{
    service.fetchUser(2).then((value) => {
      expect(value.name).toBe("Raju new");
    });
  })));

});
