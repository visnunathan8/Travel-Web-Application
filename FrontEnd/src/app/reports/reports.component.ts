import { Component, OnInit } from '@angular/core';
import { BookingPackage, BookingPackageService } from '../service/booking-package.service';
import { Travel, TravelpackageService } from '../service/travelpackage.service';
import { customeraccount, customerAccountService } from '../service/customerAccount.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  bookings: BookingPackage[] = [];
  travelList: Travel[] = [];
  customerAccounts: customeraccount[] = [];

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
    const customerState = JSON.parse(sessionStorage.getItem('customer'));
    this.travelpackageService.getTravelList().subscribe(
      (travels: Travel[]) => {
        this.travelList = travels;
      },
      (error) => {
        console.log('Error occurred while retrieving travel list:', error);
      }
    );
  }

  getBookingList() {
    this.bookingservice.getBookingPackageList().subscribe(
      (bookings: BookingPackage[]) => {
        this.bookings = bookings;
        this.renderReports();
      },
      (error) => {
        console.log("Error while retrieving booking package list");
      }
    );
  }

  getCustomerList() {
    this.customerservice.getCustomerAccountList().subscribe(
      (customers: customeraccount[]) => {
        this.customerAccounts = customers;
      }
    );
  }

  renderReports() {
    this.renderBookingsByCustomerId();
    this.renderBookingsByDestination();
    // Add more report rendering functions as needed
  }

  renderBookingsByCustomerId() {
    const reportContainer = document.getElementById('bookingsByCustomerId');
    reportContainer.innerHTML = ''; // Clear existing content

    const bookingsByCustomerId = this.groupBookingsByCustomerId();

    for (const customerId in bookingsByCustomerId) {
      if (bookingsByCustomerId.hasOwnProperty(customerId)) {
        const customerName = this.getCustomerNameById(customerId);
        const bookingCount = bookingsByCustomerId[customerId];

        const reportItem = document.createElement('div');
        reportItem.classList.add('report-item');
        reportItem.innerHTML = `
          <div class="customer-name">${customerName}</div>
          <div class="booking-count">${bookingCount} bookings</div>
        `;

        reportContainer.appendChild(reportItem);
      }
    }
  }

  renderBookingsByDestination() {
    const reportContainer = document.getElementById('bookingsByDestination');
    reportContainer.innerHTML = ''; // Clear existing content

    const bookingsByDestination = this.groupBookingsByTravelPackageId();

    for (const travelPackageId in bookingsByDestination) {
      if (bookingsByDestination.hasOwnProperty(travelPackageId)) {
        const travelPackage = this.getTravelPackageById(travelPackageId);
        const destination = travelPackage ? travelPackage.destinationCity : 'Unknown';
        const bookingCount = bookingsByDestination[travelPackageId];

        const reportItem = document.createElement('div');
        reportItem.classList.add('report-item');
        reportItem.innerHTML = `
          <div class="destination">${destination}</div>
          <div class="booking-count">${bookingCount} bookings</div>
        `;

        reportContainer.appendChild(reportItem);
      }
    }
  }

  groupBookingsByCustomerId() {
    const bookingsByCustomerId = {};
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
    const bookingsByTravelPackageId = {};
    for (const booking of this.bookings) {
      const travelPackageId = booking.travelPackageId;
      if (travelPackageId) {
        if (bookingsByTravelPackageId[travelPackageId]) {
          bookingsByTravelPackageId[travelPackageId]++;
        } else {
          bookingsByTravelPackageId[travelPackageId] = 1;
        }
      }
    }
    return bookingsByTravelPackageId;
  }

  getCustomerNameById(customerId: string) {
    const customer = this.customerAccounts.find(c => c.customerId === customerId);
    return customer ? customer.firstName : 'Unknown';
  }

  getTravelPackageById(travelPackageId: string) {
    return this.travelList.find(t => t.travelPackageId === travelPackageId);
  }
}
