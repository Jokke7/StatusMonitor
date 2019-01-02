import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcrCardComponent } from './ccr-card.component';

describe('CcrCardComponent', () => {
  let component: CcrCardComponent;
  let fixture: ComponentFixture<CcrCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcrCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
