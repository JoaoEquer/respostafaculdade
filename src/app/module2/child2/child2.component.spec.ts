import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2Component } from './child2.component';

describe('Child1Component', () => {
  let component: Child2Component;
  let fixture: ComponentFixture<Child2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child2Component]
    });
    fixture = TestBed.createComponent(Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
