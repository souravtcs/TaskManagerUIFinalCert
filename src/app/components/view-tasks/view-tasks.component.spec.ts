import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterTaskPipe } from '../../pipes/filter-task.pipe'
import { ViewTasksComponent } from './view-tasks.component';

describe('ViewTasksComponent', () => {
  let component: ViewTasksComponent;
  let fixture: ComponentFixture<ViewTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FilterTaskPipe],
      declarations: [ ViewTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('view task should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
