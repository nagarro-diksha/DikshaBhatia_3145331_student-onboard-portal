import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOnboardFormComponent } from './student-onboard-form.component';

describe('StudentOnboardFormComponent', () => {
  let component: StudentOnboardFormComponent;
  let fixture: ComponentFixture<StudentOnboardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOnboardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOnboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
