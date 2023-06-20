import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingReportComponent } from './booking-report.component';

describe('BookingReportComponent', () => {
  let component: BookingReportComponent;
  let fixture: ComponentFixture<BookingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingReportComponent]
    });
    fixture = TestBed.createComponent(BookingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
