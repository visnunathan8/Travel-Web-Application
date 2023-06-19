import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  travels: any[] = [
    // Sample data, replace with your actual data
    {
      flightId: '',
      HotelId: '',
      ActivitiesId: '',
      departureDate: '2023-05-23',
      source: 'New York',
      destination: 'London',
      toDate: '2023-05-30',
      editable: false
    },
    
    // Add more travel objects as needed
  ];

  flightOptions: string[] = ['Flight1', 'Flight2', 'Flight3'];
  hotelOptions: string[] = ['Hotel1', 'Hotel2', 'Hotel3'];
  activitiesOptions: string[] = ['Activities1', 'Activities2', 'Activities3'];

  toggleEdit(index: number) {
    this.travels[index].editable = !this.travels[index].editable;
  }

  deleteTravel(index: number) {
    this.travels.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
