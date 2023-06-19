import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookingPackage, BookingPackageService } from '../service/booking-package.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  bookings: BookingPackage[] = [];
  @Output() closeNotificationEvent = new EventEmitter<void>();

  constructor(private bookingService: BookingPackageService) { }

  ngOnInit() {
    this.getBookingPackages();
  }

  getBookingPackages() {
    this.bookingService.getBookingPackageList().subscribe(
      (bookings: BookingPackage[]) => {
        this.bookings = bookings;
      },
      (error) => {
        console.log('Error fetching booking details:', error);
      }
    );
  }

  closeNotification() {
    this.closeNotificationEvent.emit();
  }
}
