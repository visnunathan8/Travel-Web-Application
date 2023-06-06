import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export class BookingPackage {
  editable: boolean;
  constructor(
    public bookingId?: number,
    public customerId?: number,
    public travelPackageId?: number,
    public paymentId?: number,
    public totalPrice?: number,
    public departureDate?: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class BookingPackageService {
  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();
  loggedInStatus = false
  constructor(private http: HttpClient) { }

  setLoggedIn(value:boolean){
    this.loggedInStatus = value
  }
  get isLoggedIn(){
    return this.loggedInStatus
  }

  getBookingPackageList() {
    return this.http.get<BookingPackage[]>('http://localhost:8081/booking/findAllBookings/');
  }

  createBookingPackage(bookingPackage: BookingPackage) {
    return this.http.post<BookingPackage>('http://localhost:8081/booking/addBooking/', bookingPackage);
  }

  updateBookingPackage(bookingPackage: BookingPackage) {
    return this.http.post<string>('http://localhost:8081/booking/updateBooking/', bookingPackage);
  }

  deleteBookingPackage(bookingPackage: BookingPackage) {
    return this.http.post<string>('http://localhost:8081/booking/deleteBooking', bookingPackage);
  }

}
