import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterProjectPipe } from '../../pipes/filter-project.pipe'
import { ViewProjectComponent } from './view-project.component';

describe('ViewTasksComponent', () => {
  let component: ViewProjectComponent;
  let fixture: ComponentFixture<ViewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FilterProjectPipe],
      declarations: [ ViewProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('view task should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
