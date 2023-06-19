import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Flight, FlightsService } from '../service/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: Flight[] = [];
  showAddForm: boolean = false;
  searchKeyword: string = '';
  newFlight: Flight = new Flight();
  filteredFlights: Flight[] = [];
  showAddPopup: boolean = false;

  constructor(private flightService: FlightsService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getFlightList();
  }

  addNewFlight() {
    this.showAddForm = true;
    this.showAddPopup = true;
  }

  cancel() {
    this.showAddPopup = false;
  }

  deleteNewFlight() {
    this.newFlight = new Flight();
    this.showAddForm = false;
  }

  saveFlight(flight: Flight) {
    if (flight != null) {
      this.flightService.createFlight(flight).subscribe(
        (response) => {
          console.log('Flight saved successfully');
          this.resetForm();
          this.showAddForm = false;
          this.flights.push(response); // Add the new flight to the flights array
          this.filteredFlights.push(response);
          this.cancel();
        }, 
        (error) => {
          console.log('Error occurred while saving flight:', error);
        }
      );
    } else {
      alert('Please enter all required fields!');
    }
  }


  getFlightList() {
    this.flightService.getFlights().subscribe(
      (flights: Flight[]) => {
        this.flights = flights;
        this.applyFilter(); // Apply the filter when the flight list is retrieved
        this.changeDetectorRef.detectChanges(); // Trigger change detection
      },
      (error) => {
        console.log('Error occurred while retrieving flight list:', error);
      }
    );
  }

  toggleEdit(index: number) {
    const flight = this.flights[index];
    if (flight.editable) {
      this.updateFlight(index);
    }
    flight.editable = !flight.editable;
  }

  updateFlight(index: number) {
    const flight = this.flights[index];
    this.flightService.updateFlight(flight).subscribe(
      (response) => {
        console.log('Flight updated successfully');
        flight.editable = false;
        this.changeDetectorRef.detectChanges(); // Trigger change detection
      },
      (error) => {
        console.log('Error occurred while updating flight:', error);
      }
    );
  }

  deleteFlight(index: number) {
    const flightId = this.flights[index].flightId;
    this.flightService.deleteFlight(Number(flightId)).subscribe(
      (response) => {
        console.log('Flight deleted successfully');
        this.flights.splice(index, 1); // Remove the deleted flight from the flights array
        this.getFlightList();
      },
      (error) => {
        console.log('Error occurred while deleting flight:', error);
      }
    );
  }




  resetForm() {
    this.newFlight = new Flight();
  }

  applyFilter() {
    this.filteredFlights = this.flights.filter(flight =>
      flight?.airline?.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
      flight?.flightNumber?.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }

  // get filteredFlights() {
  //   return this.flights.filter(flight =>
  //     flight.flightNumber.toLowerCase().includes(this.searchKeyword.toLowerCase())
  //   );
  // }

}
