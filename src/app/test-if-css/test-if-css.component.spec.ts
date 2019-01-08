import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIfCssComponent } from './test-if-css.component';

describe('TestIfCssComponent', () => {
  let component: TestIfCssComponent;
  let fixture: ComponentFixture<TestIfCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIfCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIfCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
