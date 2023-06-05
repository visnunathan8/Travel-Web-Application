import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Hotel } from './hotel.service';
import { Activity } from './activities.service';
import { Flight } from './flights.service';

export class Travel {
  editable: boolean;
  constructor(
    public flightId ?: number,
    public hotelId ?: number,
    public activitiesId ?: number,
    public travelPackageId ?: string,
    public travelPackageName ?: string,
    public sourceCity ?: string,
    public destinationCity ?: string,
    public noOfDays ?: string,
    public totalPrice ?: string,
    public departureDate ?: string,
    public isCustomerCreated ?: boolean
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class TravelpackageService {
  constructor(private http: HttpClient) {}

  getTravelList() {
    return this.http.get<Travel[]>('http://localhost:8081/travelpackage/findAllTravelPackages');
  }

  createTravel(travel: Travel) {
    return this.http.post<Travel>('http://localhost:8081/travelpackage/addTravelPackage', travel);
  }

  updateTravel(travel: Travel) {
    return this.http.post<Travel>('http://localhost:8081/travelpackage/updateTravelPackage', travel);
  }

  deleteTravel(id: number) {
    return this.http.post<string>('http://localhost:8081/travelpackage/deleteTravelPackage', id);
  }

  // getTravelList() {
  //   return this.http.get<Travel[]>('https://floating-everglades-27882.herokuapp.com/travelpackage/findAllTravelPackages');
  // }

  // createTravel(travel: Travel) {
  //   return this.http.post<Travel>('https://floating-everglades-27882.herokuapp.com/travelpackage/addTravelPackage', travel);
  // }

  // updateTravel(travel: Travel) {
  //   return this.http.post<Travel>('https://floating-everglades-27882.herokuapp.com/travelpackage/updateTravelPackage', travel);
  // }

  // deleteTravel(id: number) {
  //   return this.http.post<string>('https://floating-everglades-27882.herokuapp.com/travelpackage/deleteTravelPackage', id);
  // }


}
