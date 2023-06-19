import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivitiesService, Activity } from '../service/activities.service';
import { BookingPackage, BookingPackageService } from '../service/booking-package.service';
import { customeraccount, customerAccountService } from '../service/customerAccount.service';
import { Flight, FlightsService } from '../service/flights.service';
import { Hotel, HotelService } from '../service/hotel.service';
import { Travel, TravelpackageService } from '../service/travelpackage.service';

@Component({
  selector: 'app-booking-package',
  templateUrl: './booking-package.component.html',
  styleUrls: ['./booking-package.component.css']
})
export class BookingPackageComponent implements OnInit {
  filtertravels: Travel[] = [];
  travels: Travel[] = [];
  bookings: BookingPackage[] = [];
  searchKeyword: string = '';
  customer: customeraccount = new customeraccount();
  newcustomer: customeraccount = new customeraccount();
  departureDate: string;
  previousSearchKeyword: string;
  handler: any;
  constructor(
    private activitiesservice: ActivitiesService,
    private flightservice: FlightsService,
    private hotelservice: HotelService,
    private cdr: ChangeDetectorRef,
    private bookingservice: BookingPackageService, private customerservice : customerAccountService, private travelService: TravelpackageService
  ) {}

  ngOnInit() {
    this.customer = history.state.customer;
    this.getBookingList();
    this.loadStripe();
  }


  pay(amount: any, index: number) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NIuIOCi5FZYbK5YmcbB343AMigr0gQlZo0aHEL6t0n5yqeiBrJsYwwZxqclQzFlTSVzH9uZQWrCZsG5Y0fJWG0e001tj1VzPw',
      locale: 'auto',
      token: (token: any) => {
        console.log(token);
        this.book(index);
        this.travels[index].editable = !this.travels[index].editable;
        this.cdr.detectChanges(); // Trigger change detection
      },
      style: {
        base: {
          fontSize: '16px',
          color: '#fff',
          '::placeholder': {
            color: '#aab7c4',
          },
          ':focus': {
            color: '#fff',
          },
        },
        invalid: {
          color: '#ff5454',
        },
      },
    });

    handler.open({
      name: 'Innovators Payment Page',
      description: '2 widgets',
      amount: amount * 100,
      // Additional options for customization
      image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      currency: 'USD',
      panelLabel: 'Pay Now',
      billingAddress: true,
      shippingAddress: false,
      allowRememberMe: true,
      // Custom styling for the modal
      style: {
        base: {
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          color: '#fff',
          '::placeholder': {
            color: '#aab7c4',
          },
          ':focus': {
            color: '#fff',
          },
          backgroundColor: '#3366ff',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          animation: 'fade-in 0.5s ease-in-out',
          width: '900px', // Increase the width as desired
          height: '800px', // Increase the height as desired
        },
        invalid: {
          color: '#ff5454',
        },
      },
    });
  }



  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51NIuIOCi5FZYbK5YmcbB343AMigr0gQlZo0aHEL6t0n5yqeiBrJsYwwZxqclQzFlTSVzH9uZQWrCZsG5Y0fJWG0e001tj1VzPw',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }

  toggleEdit(index: number) {
    console.log("ASDF")
    if (!this.travels[index].editable) {
      this.pay(this.travels[index].totalPrice, index);
    }
  }


  filterTravels() {
    if (this.searchKeyword === this.previousSearchKeyword) {
      // No change in the search keyword, do nothing
      return;
    }

    this.previousSearchKeyword = this.searchKeyword;

    if (!this.searchKeyword) {
      // If the search keyword is empty, show all travels
      this.getTravelList();
    } else {
      // Filter travels based on the search keyword
      this.travels = this.travels.filter((travel) => {
        const searchKeyword = this.searchKeyword.toString().toLowerCase(); // Convert the search keyword to lowercase string

        return (
          travel.travelPackageName.toLowerCase().includes(searchKeyword) ||
          travel.flightId.toString().includes(searchKeyword) ||
          travel.hotelId.toString().includes(searchKeyword) ||
          travel.activitiesId.toString().includes(searchKeyword) ||
          travel.sourceCity.toLowerCase().includes(searchKeyword) ||
          travel.destinationCity.toLowerCase().includes(searchKeyword)
        );
      });
    }
  }



  book(index: number) {
    const travel = this.travels[index];
    var bookingPackage: BookingPackage;
    // const customerState = this.customerservice.getCustomerState();
    const customerState = JSON.parse(sessionStorage.getItem('customer'));

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
            this.cdr.detectChanges(); // Trigger change detection
            this.filterTravels();
          },
          (error) => {
            console.log('Error occurred while updating travel:', error);
          }
        );
      });
    }
  }



  book(index: number) {
    const travel = this.travels[index];
    let bookingPackage: BookingPackage;
    const customerStateString = sessionStorage.getItem('customer');
    const customerState = customerStateString ? JSON.parse(customerStateString) : null;

    if (customerState) {
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
              this.cdr.detectChanges(); // Trigger change detection
              this.filterTravels();
              
            },
            (error) => {
              console.log('Error occurred while updating travel:', error);
            }
          );
        }
      );
    } else {
      console.log('Customer state not found.');
      // Handle the case when customer state is not available
    }
  }

  cancel(index: number) {
    console.log("TEST");
    const travel = this.travels[index];
    const travelPackageId = travel.travelPackageId;

    if (travelPackageId) {
      const booking = this.findBookingByPackageId(travelPackageId);

      if (booking) {
        this.bookingservice.deleteBookingPackage(booking).subscribe(
          (response: string) => {
            this.travels[index].editable = !this.travels[index].editable;
            this.cdr.detectChanges(); // Trigger change detection
            console.log('Booking canceled successfully' + response);
          },
          (error) => {
            console.log('Error occurred while canceling booking:', error);
          }
        );
      } else {
        console.log('No booking found for the travel package');
      }
    } else {
      console.log('travelPackageId is undefined');
    }
  }



  findBookingByPackageId(packageId: number) {
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
    // const customerState = this.customerservice.getCustomerState();
    const customerState = JSON.parse(sessionStorage.getItem('customer'));

    this.customerservice.getCustomerAccount(customerState.username).subscribe(
      (result: customeraccount) => {
        this.newcustomer = result;
        this.travelService.getTravelListByCustomerID(Number(this.newcustomer.customerId)).subscribe(
          (travels: Travel[]) => {
            console.log(travels);
            this.travels = travels.map((travel) => ({
              ...travel,
              editable: !this.hasBookingForTravelPackage(travel.travelPackageId, Number(this.newcustomer.customerId)),
              departureDate: this.departureDateupdate(travel.travelPackageId, Number(this.newcustomer.customerId))
            }));

            // Apply filtering
            this.filterTravels();
          },
          (error) => {
            console.log('Error occurred while retrieving travel list:', error);
          }
        );
      }
    )




  }


  // hasBookingForTravelPackage(travelPackageId: string): boolean {
  //   return this.bookings.some((booking) => Number(booking.travelPackageId) === Number(travelPackageId));
  // }
  departureDateupdate(travelPackageId: string, customerId: Number): string {
    // Iterate through the bookings and check if any booking has the same packageId
    for (const booking of this.bookings) {
      if ((booking.customerId === customerId) && booking.travelPackageId === Number(travelPackageId)) {
        return booking.departureDate; // Booking found for the travel package
      }
    }
    return undefined; // No booking found for the travel package
  }



  // hasBookingForTravelPackage(travelPackageId: string): boolean {
  //   return this.bookings.some((booking) => Number(booking.travelPackageId) === Number(travelPackageId));
  // }
  hasBookingForTravelPackage(travelPackageId: string, customerId: Number): boolean {
    // Iterate through the bookings and check if any booking has the same packageId
    for (const booking of this.bookings) {
      if ((booking.customerId === customerId) && booking.travelPackageId === Number(travelPackageId)) {
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
        console.log("boooooooookings : ")
        console.log(this.bookings)
        this.getTravelList();
      },
      (error) => {
        console.log("Error while retreving booking package list");
      }
    )
  }

  onSearchInputChange(){

  }


  toggleDetails(index: number) {
    this.expandedIndex = this.expandedIndex === index ? -1 : index;
  }

}
