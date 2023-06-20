import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllBookingPackageComponent } from './list-all-booking-package.component';

describe('ListAllBookingPackageComponent', () => {
  let component: ListAllBookingPackageComponent;
  let fixture: ComponentFixture<ListAllBookingPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllBookingPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllBookingPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
