import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Hotel {
  editable: boolean;
  constructor(
    public hotelId ?: number,
    public hotelName ?: string,
    public location ?: string,
    public pricePerNight ?: number,
    public amenities ?: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotelById(hotelId: number): Observable<Hotel> {
    return this.http.get<Hotel>('http://localhost:8081/hotel/findHotelById?hotelId=' + hotelId);
  }

  createHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>('http://localhost:8081/hotel/addHotel', hotel);
  }

  updateHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>('http://localhost:8081/hotel/updateHotel', hotel);
  }

  deleteHotel(hotelId: number): Observable<any> {
    return this.http.post('http://localhost:8081/hotel/deleteHotel?hotelId=' + hotelId, {});
  }

  getHotelList(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('http://localhost:8081/hotel/findAllHotels');
  }

  // getHotelById(hotelId: number): Observable<Hotel> {
  //   return this.http.get<Hotel>('https://floating-everglades-27882.herokuapp.com/hotel/findHotelById?hotelId=' + hotelId);
  // }

  // createHotel(hotel: Hotel): Observable<Hotel> {
  //   return this.http.post<Hotel>('https://floating-everglades-27882.herokuapp.com/hotel/addHotel', hotel);
  // }

  // updateHotel(hotel: Hotel): Observable<Hotel> {
  //   return this.http.post<Hotel>('https://floating-everglades-27882.herokuapp.com/hotel/updateHotel', hotel);
  // }

  // deleteHotel(hotelId: number): Observable<any> {
  //   return this.http.post('https://floating-everglades-27882.herokuapp.com/hotel/deleteHotel?hotelId=' + hotelId, {});
  // }

  // getHotelList(): Observable<Hotel[]> {
  //   return this.http.get<Hotel[]>('https://floating-everglades-27882.herokuapp.com/hotel/findAllHotels');
  // }
}
