import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookingPackage, BookingPackageService } from '../service/booking-package.service';
import { customeraccount, customerAccountService } from '../service/customerAccount.service';
import { Travel, TravelpackageService } from '../service/travelpackage.service';

@Component({
  selector: 'app-list-all-booking-package',
  templateUrl: './list-all-booking-package.component.html',
  styleUrls: ['./list-all-booking-package.component.css']
})
export class ListAllBookingPackageComponent implements OnInit {

  travels: Travel[] = [];
  bookings: BookingPackage[] = [];
  searchKeyword: string = '';
  customer: customeraccount = new customeraccount();
  newcustomer: customeraccount = new customeraccount();
  departureDate: string = '';
  previousSearchKeyword: string = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private bookingservice: BookingPackageService, private customerservice : customerAccountService, private travelService: TravelpackageService
  ) {}

  ngOnInit() {
    this.customer = history.state.customer;
    this.getBookingList();
  }

  toggleEdit(index: number) {
    if (!this.bookings[index].editable) {
      this.bookings[index].editable = !this.bookings[index].editable;
      this.cdr.detectChanges(); // Trigger change detection
    }
  }


  filterTravels() {
    if (this.searchKeyword === this.previousSearchKeyword) {
      return;
    }
    this.previousSearchKeyword = this.searchKeyword;
    if (!this.searchKeyword) {
      this.getBookingList();
    } else {
      this.bookings = this.bookings.filter((bookings) => {
        const searchKeyword = this.searchKeyword.toString().toLowerCase();

        return (
          bookings?.bookingId?.toString().includes(searchKeyword)
        );
      });
    }
  }

  cancel(index: number) {
    const booking = this.bookings[index];
    if (booking) {
      this.bookingservice.deleteBookingPackage(booking).subscribe(
        (response: string) => {
          this.bookings[index].editable = !this.bookings[index].editable;
          this.cdr.detectChanges();
          this.bookings.splice(index, 1); // Remove the deleted flight from the flights array
          this.getBookingList();
          console.log('Booking canceled successfully'+response);
        },
        (error) => {
          console.log('Error occurred while canceling booking:', error);
        }
      );
    }
  }

  hasBookingForTravelPackage(travelPackageId: string): boolean {
    for (const booking of this.bookings) {
      if (booking.travelPackageId === Number(travelPackageId)) {
        return false;
      }
    }
    return true;
  }

  getBookingList() {
    this.bookingservice.getBookingPackageList().subscribe(
      (bookings: BookingPackage[]) => {
        for (let i = 0; i < bookings.length; i++) {
          this.bookings.push({ ...bookings[i] });
        }
      },
      (error) => {
        console.log("Error while retreving booking package list");
      }
    )
  }
  onSearchInputChange(){}


}
