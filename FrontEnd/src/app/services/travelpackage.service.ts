import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Hotel } from './hotel.service';
import { Activity } from './activities.service';

export class Travel {
  editable: boolean;
  constructor(
    public travelPackageId ?: string,
    public travelPackageName ?: string,
    public flight ?: string,
    public hotel ?: Hotel,
    public activities ?: Activity,
    public departureDate ?: string,
    public sourceCity ?: string,
    public destinationCity ?: string,
    public noOfDays ?: string,
    public totalPrice ?: string
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

  deleteTravel(id: string) {
    return this.http.post<string>('http://localhost:8081/travelpackage/deleteTravelPackage', id);
  }


}
