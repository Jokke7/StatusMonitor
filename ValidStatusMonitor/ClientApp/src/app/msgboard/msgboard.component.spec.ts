import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgboardComponent } from './msgboard.component';

describe('MsgboardComponent', () => {
  let component: MsgboardComponent;
  let fixture: ComponentFixture<MsgboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
