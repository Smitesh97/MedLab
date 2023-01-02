import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsinfoComponent } from './dealsinfo.component';

describe('DealsinfoComponent', () => {
  let component: DealsinfoComponent;
  let fixture: ComponentFixture<DealsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
