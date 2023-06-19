import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookingPackage, BookingPackageService } from '../service/booking-package.service';
import { customeraccount, customerAccountService } from '../service/customerAccount.service';
import { Travel, TravelpackageService } from '../service/travelpackage.service';

@Component({
  selector: 'app-booking-package',
  templateUrl: './booking-package.component.html',
  styleUrls: ['./booking-package.component.css']
})
export class BookingPackageComponent implements OnInit {
  travels: Travel[] = [];
  bookings: BookingPackage[] = [];
  searchKeyword: string = '';
  customer: customeraccount;
  newcustomer: customeraccount = new customeraccount();
  departureDate: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private bookingservice: BookingPackageService, private customerservice : customerAccountService, private travelService: TravelpackageService
  ) {}

  ngOnInit() {
    this.customer = history.state.customer;
    this.getBookingList();
  }

  toggleEdit(index: number) {
    console.log("ASDF")
    if (!this.travels[index].editable) {
      this.book(index);
      this.travels[index].editable = !this.travels[index].editable;
      this.cdr.detectChanges(); // Trigger change detection
    }
  }

  book(index: number) {
    const travel = this.travels[index];
    var bookingPackage: BookingPackage;
    const customerState = this.customerservice.getCustomerState();
    this.customerservice.getCustomerAccount(customerState.username).subscribe(
      (result: customeraccount) => {
        this.newcustomer = result;
        bookingPackage = {
          editable: false,
          customerId: Number(this.newcustomer.customerId),
          travelPackageId: Number(travel.travelPackageId),
          totalPrice: Number(travel.totalPrice),
          departureDate: String(travel.departureDate)
        };
        this.bookingservice.createBookingPackage(bookingPackage).subscribe(
          (response) => {
            console.log('Booking updated successfully');
            this.bookings.push(response);
          },
          (error) => {
            console.log('Error occurred while updating travel:', error);
          }
        );

      }
    )

  }

  cancel(index: number) {
    console.log("TEST")
    const travel = this.travels[index];
    const travelPackageId = travel.travelPackageId;
    const booking = this.findBookingByPackageId(travelPackageId);

    if (booking) {
      this.bookingservice.deleteBookingPackage(booking).subscribe(
        (response: string) => {
          this.travels[index].editable = !this.travels[index].editable;
          this.cdr.detectChanges(); // Trigger change detection
          console.log('Booking canceled successfully'+response);
        },
        (error) => {
          console.log('Error occurred while canceling booking:', error);
        }
      );
    }
  }

  findBookingByPackageId(packageId: string) {
    let foundBooking = null;
    this.bookings.forEach(booking => {
      if (booking.travelPackageId === Number(packageId)) {
        foundBooking = booking;
      }
    });
    // Return foundBooking or handle the case when no booking is found
    return foundBooking;
  }

  // getTravelList() {
  //   this.travelService.getTravelList().subscribe(
  //     (travels: Travel[]) => {
  //       console.log(travels);
  //       this.travels = travels.map((travel) => ({ ...travel, editable: false }));
  //     },
  //     (error) => {
  //       console.log('Error occurred while retrieving travel list:', error);
  //     }
  //   );
  // }

  getTravelList() {
    this.travelService.getTravelList().subscribe(
      (travels: Travel[]) => {
        console.log(travels);
        this.travels = travels.map((travel) => ({
          ...travel,
          editable: !this.hasBookingForTravelPackage(travel.travelPackageId),
          departureDate: this.departureDateupdate(travel.travelPackageId)
        }));
      },
      (error) => {
        console.log('Error occurred while retrieving travel list:', error);
      }
    );
  }

  // hasBookingForTravelPackage(travelPackageId: string): boolean {
  //   return this.bookings.some((booking) => Number(booking.travelPackageId) === Number(travelPackageId));
  // }
  departureDateupdate(travelPackageId: string): string {
    // Iterate through the bookings and check if any booking has the same packageId
    for (const booking of this.bookings) {
      if (booking.travelPackageId === Number(travelPackageId)) {
        return booking.departureDate; // Booking found for the travel package
      }
    }
    return null; // No booking found for the travel package
  }


  // hasBookingForTravelPackage(travelPackageId: string): boolean {
  //   return this.bookings.some((booking) => Number(booking.travelPackageId) === Number(travelPackageId));
  // }
  hasBookingForTravelPackage(travelPackageId: string): boolean {
    // Iterate through the bookings and check if any booking has the same packageId
    for (const booking of this.bookings) {
      if (booking.travelPackageId === Number(travelPackageId)) {
        return false; // Booking found for the travel package
      }
    }
    return true; // No booking found for the travel package
  }

  getBookingList() {
    this.bookingservice.getBookingPackageList().subscribe(
      (bookings: BookingPackage[]) => {
        for (let i = 0; i < bookings.length; i++) {
          this.bookings.push({ ...bookings[i] });
        }
        this.getTravelList();
      },
      (error) => {
        console.log("Error while retreving booking package list");
      }
    )
  }

}
