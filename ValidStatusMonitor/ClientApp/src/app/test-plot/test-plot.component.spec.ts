import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPlotComponent } from './test-plot.component';

describe('TestPlotComponent', () => {
  let component: TestPlotComponent;
  let fixture: ComponentFixture<TestPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
