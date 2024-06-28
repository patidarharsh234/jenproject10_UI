import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrackinglistComponent } from './vehicle-trackinglist.component';

describe('VehicleTrackinglistComponent', () => {
  let component: VehicleTrackinglistComponent;
  let fixture: ComponentFixture<VehicleTrackinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTrackinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTrackinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
