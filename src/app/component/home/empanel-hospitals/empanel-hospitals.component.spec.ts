import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanelHospitalsComponent } from './empanel-hospitals.component';

describe('EmpanelHospitalsComponent', () => {
  let component: EmpanelHospitalsComponent;
  let fixture: ComponentFixture<EmpanelHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpanelHospitalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpanelHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
