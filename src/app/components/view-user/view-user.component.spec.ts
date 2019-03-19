import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterUserPipe } from '../../pipes/filter-user.pipe'
import { ViewUserComponent } from './view-user.component';

describe('ViewTasksComponent', () => {
  let component: ViewUserComponent;
  let fixture: ComponentFixture<ViewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FilterUserPipe],
      declarations: [ ViewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('view task should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
