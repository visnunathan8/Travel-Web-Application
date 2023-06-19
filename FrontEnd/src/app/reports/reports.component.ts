import { Component, OnInit } from '@angular/core';
import { BookingPackage, BookingPackageService } from '../service/booking-package.service';
import { Travel, TravelpackageService } from '../service/travelpackage.service';
import { customeraccount, customerAccountService } from '../service/customerAccount.service';
// Import Material UI components
import { ThemePalette } from '@angular/material/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSelectChange } from '@angular/material/select';
import { CanvasJS } from 'src/assets/canvasjs.angular.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  bookings: BookingPackage[] = [];
  travelList: Travel[] = [];
  customerAccounts: customeraccount[] = [];
  chartType: string = 'column';
  animationEnabled: boolean = true;
  chartType1: string = 'column';
  animationEnabled1: boolean = true;


  constructor(
    private bookingservice: BookingPackageService,
    private travelpackageService: TravelpackageService,
    private customerservice: customerAccountService
  ) { }

  ngOnInit() {
    this.getBookingList();
    this.getTravelList();
    this.getCustomerList();
  }

  getTravelList() {
    const customerState = JSON.parse(sessionStorage.getItem('customer') as string);
    if (customerState !== null) {
      this.travelpackageService.getTravelList().subscribe(
        (travels: Travel[]) => {
          this.travelList = travels;
        },
        (error) => {
          console.log('Error occurred while retrieving travel list:', error);
        }
      );
    } else {
      // Handle the case when the customer value is null
    }
  }


  getBookingList() {
    this.bookingservice.getBookingPackageList().subscribe(
      (bookings: BookingPackage[]) => {
        this.bookings = bookings;
        this.renderReports();
      },
      (error) => {
        console.log('Error while retrieving booking package list');
      }
    );
  }

  getCustomerList() {
    this.customerservice.getCustomerAccountList().subscribe(
      (customers: customeraccount[]) => {
        this.customerAccounts = customers;
        console.log("=>"+this.customerAccounts);
      }
    );
  }

  renderReports() {
    this.renderBookingsByCustomerId();
    this.renderBookingsByDestination();
    // // Add more report rendering functions as needed
    // this.renderAdditionalChart(); // Call your custom chart rendering function

  }

  renderBookingsByCustomerId() {
    const reportContainer = document.getElementById('bookingsByCustomerId');
    reportContainer!.innerHTML = ''; // Clear existing content

    const bookingsByCustomerId = this.groupBookingsByCustomerId();
    const chartData = [];

    for (const customerId in bookingsByCustomerId) {
      if (bookingsByCustomerId.hasOwnProperty(customerId)) {
        const customerName = this.getCustomerNameById(Number(customerId));
        const bookingCount = bookingsByCustomerId[customerId];

        chartData.push({ label: customerName, y: bookingCount });

      }
    }
   const options = {
      animationEnabled: this.animationEnabled,
      title: {
        text: 'Customer Bookings Chart'
      },
      data: [{
        type: this.chartType,
        dataPoints: chartData
      }]
    };
    const chart = new CanvasJS.Chart('bookingsByCustomerId', options);
    chart.render();

  }

  renderBookingsByDestination() {
    const reportContainer = document.getElementById('bookingsByDestination');
    reportContainer!.innerHTML = ''; 

    const bookingsByDestination = this.groupBookingsByTravelPackageId();
    const chartData = [];

    for (const travelPackageId in bookingsByDestination) {
      if (bookingsByDestination.hasOwnProperty(travelPackageId)) {
        const travelPackage = this.getTravelPackageById(Number(travelPackageId));
        const destination = travelPackage ? travelPackage.destinationCity : 'Unknown';
        const bookingCount = bookingsByDestination[travelPackageId];
        
        chartData.push({ label: destination, y: bookingCount });
      }
    }
    const options = {
      animationEnabled: this.animationEnabled1,
      title: {
        text: 'Bookings By Destination Chart'
      },
      data: [{
        type: this.chartType1,
        dataPoints: chartData
      }]
    };
    console.log("HELLOOO");
    console.log(chartData)
    const chart = new CanvasJS.Chart('bookingsByDestination', options);
    chart.render();
  }

  // renderAdditionalChart() {
  //   const chartData = [
  //     { label: 'Category 1', y: 10 },
  //     { label: 'Category 2', y: 20 },
  //     { label: 'Category 3', y: 15 },
  //     { label: 'Category 4', y: 30 },
  //     { label: 'Category 5', y: 25 }
  //   ];

  //   const options = {
  //     animationEnabled: this.animationEnabled,
  //     theme: this.theme,
  //     title: {
  //       text: 'Additional Chart'
  //     },
  //     data: [{
  //       type: this.chartType,
  //       dataPoints: chartData
  //     }]
  //   };

  //   const chartContainer = document.getElementById('chartContainer');
  //   chartContainer!.innerHTML = ''; // Clear existing content

  //   const chart = new CanvasJS.Chart('chartContainer', options);
  //   chart.render();
  // }

  groupBookingsByCustomerId() {
    console.log("bookings : ");
    console.log(this.bookings);
    const bookingsByCustomerId: { [key: number]: number } = {};
    for (const booking of this.bookings) {
      const customerId = booking.customerId;
      if (customerId) {
        if (bookingsByCustomerId[customerId]) {
          bookingsByCustomerId[customerId]++;
        } else {
          bookingsByCustomerId[customerId] = 1;
        }
      }
    }
    return bookingsByCustomerId;
  }
  

  groupBookingsByTravelPackageId() {
    const bookingsByTravelPackageId: { [key: number]: number } = {};
    for (const booking of this.bookings) {
      const travelPackageId = Number(booking.travelPackageId);
      if (travelPackageId) {
        if (bookingsByTravelPackageId[travelPackageId]) {
          bookingsByTravelPackageId[travelPackageId]++;
        } else {
          bookingsByTravelPackageId[travelPackageId] = 1;
        }
      }
    }
    console.log("TEEEEEE : ");
    console.log(bookingsByTravelPackageId);
    return bookingsByTravelPackageId;
  }
  

  getCustomerNameById(customerId: number) {
    const customer = this.customerAccounts.find(c => c.customerId === customerId);
    console.log("this.customerAccounts : ");
    console.log(this.customerAccounts)
    return customer ? customer.firstName : 'UNKNOWN';
  }

  getTravelPackageById(travelPackageId: number) {
    return this.travelList.find(t => t.travelPackageId === travelPackageId);
  }

  toggleChartType(event: MatButtonToggleChange) {
    this.chartType = event.value;
    this.renderBookingsByCustomerId();
  }

  toggleAnimation(event: MatSlideToggleChange) {
    this.animationEnabled = event.checked;
    this.renderBookingsByCustomerId();
  }
  toggleChartType1(event: MatButtonToggleChange) {
    this.chartType1 = event.value;
    this.renderBookingsByDestination();
  }

  toggleAnimation1(event: MatSlideToggleChange) {
    this.animationEnabled1 = event.checked;
    this.renderBookingsByDestination();
  }

}
