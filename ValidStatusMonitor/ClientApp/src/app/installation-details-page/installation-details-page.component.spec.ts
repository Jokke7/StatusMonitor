import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationDetailsPageComponent } from './installation-details-page.component';

describe('InstallationDetailsPageComponent', () => {
  let component: InstallationDetailsPageComponent;
  let fixture: ComponentFixture<InstallationDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
