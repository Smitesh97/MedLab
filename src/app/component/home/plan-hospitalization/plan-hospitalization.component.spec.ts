import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanHospitalizationComponent } from './plan-hospitalization.component';

describe('PlanHospitalizationComponent', () => {
  let component: PlanHospitalizationComponent;
  let fixture: ComponentFixture<PlanHospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanHospitalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
