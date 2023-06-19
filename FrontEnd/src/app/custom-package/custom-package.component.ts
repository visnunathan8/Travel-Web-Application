import { Component, OnInit } from '@angular/core';
import { ActivitiesService, Activity } from '../service/activities.service';
import { customeraccount, customerAccountService } from '../service/customerAccount.service';
import { Flight, FlightsService } from '../service/flights.service';
import { Hotel, HotelService } from '../service/hotel.service';
import { Travel, TravelpackageService } from '../service/travelpackage.service';


@Component({
  selector: 'app-custom-package',
  templateUrl: './custom-package.component.html',
  styleUrls: ['./custom-package.component.css']
})
export class CustomPackageComponent implements OnInit {
  travels: Travel[] = [];
  flightOptions: Flight[] = [];
  hotelOptions: Hotel[] = [];
  activitiesOptions: Activity[] = [];
  showAddForm: boolean = false;
  searchKeyword: string = '';
  customer: customeraccount = new customeraccount();
  filteredTravels: Travel[] = [];
  newcustomer: customeraccount = new customeraccount();
  showAddPopup: boolean = false;

  applySearchFilter() {
    this.filteredTravels = this.travels.filter(
      (travel) =>
        travel?.travelPackageName?.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }

  constructor(
    private activitiesservice: ActivitiesService,
    private flightservice: FlightsService,
    private hotelservice: HotelService,
    private travelService: TravelpackageService,
    private customerservice : customerAccountService,
  ) {}

  ngOnInit() {
    this.getTravelList();
    this.getFlightOptions();
    this.getHotelOptions(); 
    this.getActivitiesOptions();
    this.customer = history.state.customer;
  }

  newTravel: Travel = new Travel();

  getHotelNameById(hotelId: number): string {
    const hotel = this.hotelOptions.find((hotel) => hotel.hotelId === hotelId);
    return hotel ? hotel.hotelName || '' : '';
  }

  getFlightNameById(flightId: number): string {
    const flight = this.flightOptions.find((flight) => flight.flightId === flightId);
    return flight ? flight.airline || '' : '';
  }

  getActivityNameById(activityId: number): string {
    const activity = this.activitiesOptions.find((activity) => activity.activitiesId === activityId);
    return activity ? activity.activityName || '' : '';
  }

  getHotelPriceById(hotelId: number): Number {
    const hotel = this.hotelOptions.find((hotel) => hotel.hotelId === hotelId);
    return hotel ? hotel.pricePerNight || 0 : 0;
  }

  getFlightPriceById(flightId: number): Number {
    const flight = this.flightOptions.find((flight) => flight.flightId === flightId);
    return flight ? flight.ticketPrice || 0 : 0;
  }

  getActivityPriceById(activityId: number): Number {
    const activity = this.activitiesOptions.find((activity) => activity.activitiesId === activityId);
    return activity ? activity.price || 0 : 0;
  }
  addNewTravel() {
    this.showAddForm = true;
    this.showAddPopup = true;
  }

  cancel() {
    this.showAddPopup = false;
  }

  deleteNewTravel() {
    this.showAddForm = false;
    
  }

  saveTravel(travel: Travel) {
    travel.activitiesId = Number(travel.activitiesId);
    travel.flightId = Number(travel.flightId);
    travel.hotelId = Number(travel.hotelId);
    travel.isCustomerCreated = true;
    travel.totalPrice = (Number(travel.noOfDays)*Number(this.getHotelPriceById(travel.hotelId)))+ Number(this.getFlightPriceById(travel.flightId)) + Number(this.getActivityPriceById(travel.activitiesId));
    const customerStateString = sessionStorage.getItem('customer');
    const customerState = customerStateString ? JSON.parse(customerStateString) : null;

    if (customerState) {
      this.customerservice.getCustomerAccount(customerState.username).subscribe(
        (result: customeraccount) => {
          this.newcustomer = result;
          travel.customerId = Number(this.newcustomer.customerId);
          this.travelService.createTravel(travel).subscribe(
            (response) => {
              console.log('Travel saved successfully');
              this.resetForm();
              this.showAddForm = false;
              this.getTravelList();
              this.cancel();
            },
            (error) => {
              console.log('Error occurred while saving travel:', error);
            }
          );
        }
      );
    } else {
      console.log('Customer state not found.');
      // Handle the case when customer state is not available
    }
  }


  getTravelList() {
    const customerStateString = sessionStorage.getItem('customer');
    const customerState = customerStateString ? JSON.parse(customerStateString) : null;

    if (customerState) {
      this.customerservice.getCustomerAccount(customerState.username).subscribe(
        (result: customeraccount) => {
          this.newcustomer = result;
          this.travelService.getTravelListByCustomerID(Number(this.newcustomer.customerId)).subscribe(
            (travels: Travel[]) => {
              this.filteredTravels = travels;
              this.travels = travels;
            },
            (error) => {
              console.log('Error occurred while retrieving travel list:', error);
            }
          ); 
        }
      );
    } else {
      console.log('Customer state not found.');
      // Handle the case when customer state is not available
    }
  }



  toggleEdit(index: number) {
    if (this.filteredTravels[index].editable) {
      this.updateTravel(index);
    }
    this.filteredTravels[index].editable = !this.filteredTravels[index].editable;
  }

  updateTravel(index: number) {
    const travel = this.filteredTravels[index];
    this.travelService.updateTravel(travel).subscribe(
      (response) => {
        console.log('Travel updated successfully');
        travel.editable = false;
      },
      (error) => {
        console.log('Error occurred while updating travel:', error);
      }
    );
  }

  deleteTravel(index: number) {
    console.log(this.filteredTravels)
    console.log(index)
    const travelId = this.filteredTravels[index].travelPackageId;
    this.travelService.deleteTravel(Number(travelId)).subscribe(
      (response) => {
        console.log('Travel deleted successfully');
        this.getTravelList();
      },
      (error) => {
        console.log('Error occurred while deleting travel:', error);
      }
    );
  }

  resetForm() {
    this.newTravel = new Travel();
  }

  getFlightOptions() {
    this.flightservice.getFlights().subscribe(
      (options: Flight[]) => {
        for (let i = 0; i < options.length; i++) {
          this.flightOptions.push(options[i]);
        }
      },
      (error) => {
        console.log('Error occurred while retrieving flight options:', error);
      }
    );
  }

  getHotelOptions() {
    this.hotelservice.getHotelList().subscribe(
      (options: Hotel[]) => {
        for (let i = 0; i < options.length; i++) {
          this.hotelOptions.push(options[i]);
        }

      },
      (error) => {
        console.log('Error occurred while retrieving hotel options:', error);
      }
    );
  }

  getActivitiesOptions() {
    this.activitiesservice.getActivities().subscribe(
      (options: Activity[]) => {
        for (let i = 0; i < options.length; i++) {
          this.activitiesOptions.push(options[i]);
        }
      },
      (error) => {
        console.log('Error occurred while retrieving activities options:', error);
      }
    );
  }

}
