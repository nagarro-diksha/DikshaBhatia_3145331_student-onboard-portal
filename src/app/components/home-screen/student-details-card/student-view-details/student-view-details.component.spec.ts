import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewDetailsComponent } from './student-view-details.component';

describe('StudentViewDetailsComponent', () => {
  let component: StudentViewDetailsComponent;
  let fixture: ComponentFixture<StudentViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
