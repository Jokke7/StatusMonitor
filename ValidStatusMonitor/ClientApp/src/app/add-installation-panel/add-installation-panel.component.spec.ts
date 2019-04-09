import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstallationPanelComponent } from './add-installation-panel.component';

describe('AddInstallationPanelComponent', () => {
  let component: AddInstallationPanelComponent;
  let fixture: ComponentFixture<AddInstallationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstallationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstallationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
