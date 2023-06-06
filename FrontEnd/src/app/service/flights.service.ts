import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Flight {
  editable: boolean;
  constructor(
    public flightId ?: number,
    public airline ?: string,
    public flightNumber ?:  string,
    public ticketPrice ?: number,
    public noOfSeats ?: number
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  constructor(private http: HttpClient) {}

  getFlights() {
    return this.http.get<Flight[]>('http://localhost:8081/flight/findAllFlights');
  }

  createFlight(flight: Flight) {
    return this.http.post<Flight>('http://localhost:8081/flight/addFlight', flight);
  }

  updateFlight(flight: Flight) {
    return this.http.post<Flight>('http://localhost:8081/flight/updateFlight', flight);
  }

  deleteFlight(flightId: number) {
    return this.http.post<string>('http://localhost:8081/flight/deleteFlight?flightId=' + flightId, null);
  }


  // getFlights() {
  //   return this.http.get<Flight[]>('https://floating-everglades-27882.herokuapp.com/flight/findAllFlights');
  // }

  // createFlight(flight: Flight) {
  //   return this.http.post<Flight>('https://floating-everglades-27882.herokuapp.com/flight/addFlight', flight);
  // }

  // updateFlight(flight: Flight) {
  //   return this.http.post<Flight>('https://floating-everglades-27882.herokuapp.com/flight/updateFlight', flight);
  // }

  // deleteFlight(flightId: number) {
  //   return this.http.post<string>('https://floating-everglades-27882.herokuapp.com/flight/deleteFlight?flightId=' + flightId, null);
  // }

}
