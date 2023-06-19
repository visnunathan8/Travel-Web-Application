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
  customer: customeraccount;
  filteredTravels: Travel[] = [];
  newcustomer: customeraccount = new customeraccount();
  applySearchFilter() {
    this.filteredTravels = this.travels.filter(
      (travel) =>
        travel.travelPackageName.toLowerCase().includes(this.searchKeyword.toLowerCase())
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



  addNewTravel() {
    this.showAddForm = true;
  }

  deleteNewTravel() {
    this.showAddForm = false;
  }

  saveTravel(travel: Travel) {
    travel.activitiesId = Number(travel.activitiesId);
    travel.flightId = Number(travel.flightId);
    travel.hotelId = Number(travel.hotelId);
    travel.isCustomerCreated = true;
    const customerState = JSON.parse(sessionStorage.getItem('customer'));
    // const customerState = this.customerservice.getCustomerState();

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
          },
          (error) => {
            console.log('Error occurred while saving travel:', error);
          }
        );
      }
    )
  }

  getTravelList() {

    // const customerState = this.customerservice.getCustomerState();
    const customerState = JSON.parse(sessionStorage.getItem('customer'));

    this.customerservice.getCustomerAccount(customerState.username).subscribe(
      (result: customeraccount) => {
        this.newcustomer = result;
        this.travelService.getTravelListByCustomerID(Number(this.newcustomer.customerId)).subscribe(
          (travels: Travel[]) => {
            console.log(travels);
            this.travels = travels.map((travel) => Object.assign({}, travel, { editable: false }));
            this.filteredTravels = this.travels.map((travel) => Object.assign({}, travel));
            this.applySearchFilter();
          },
          (error) => {
            console.log('Error occurred while retrieving travel list:', error);
          }
        );
      }
    )
  }


  toggleEdit(index: number) {
    if (this.travels[index].editable) {
      this.updateTravel(index);
    }
    this.travels[index].editable = !this.travels[index].editable;
  }

  updateTravel(index: number) {
    const travel = this.travels[index];
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
    const travelId = this.travels[index].travelPackageId;
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
