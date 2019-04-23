import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarOuterComponent } from './navigation-bar-outer.component';

describe('NavigationBarOuterComponent', () => {
  let component: NavigationBarOuterComponent;
  let fixture: ComponentFixture<NavigationBarOuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationBarOuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
