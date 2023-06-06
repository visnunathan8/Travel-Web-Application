import { Component, OnInit } from '@angular/core';
import { Hotel, HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelComponent implements OnInit {
  filteredHotels: Hotel[] = []; // Array to hold the filtered hotels
  searchKeyword: string = ''; // Variable to store the search keyword
  showAddForm: boolean = false; // Variable to control the display of the add form
  newHotel: Hotel = new Hotel(); // Object to store the details of the new hotel

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.getHotelList();
  }

  toggleEdit(index: number) {
    if (this.filteredHotels[index].editable) {
      this.updateHotel(index);
    }
    this.filteredHotels[index].editable = !this.filteredHotels[index].editable;
  }

  deleteHotel(index: number) {
    const hotelId = this.filteredHotels[index].hotelId;
    this.hotelService.deleteHotel(hotelId).subscribe(
      (response) => {
        console.log('Hotel deleted successfully');
        this.getHotelList(); // Fetch the updated list of hotels from the server
      },
      (error) => {
        console.log('Error occurred while deleting hotel:', error);
      }
    );
  }

  deleteNewHotel() {
    this.newHotel = new Hotel();
    this.showAddForm = false;
  }

  addNewHotel() {
    this.showAddForm = true;
  }

  saveHotel(hotel: Hotel) {
    if (hotel != null) {
      this.hotelService.createHotel(hotel).subscribe(
        (response) => {
          console.log('Hotel saved successfully');
          this.resetForm();
          this.showAddForm = false;
          this.getHotelList(); // Refresh the hotel list
        },
        (error) => {
          console.log('Error occurred while saving hotel:', error);
        }
      );
    } else {
      alert('Please enter all required fields!');
    }
  }

  getHotelList() {
    this.hotelService.getHotelList().subscribe(
      (hotels: Hotel[]) => {
        console.log(hotels);
        this.filteredHotels = hotels.map((hotel) => ({ ...hotel, editable: false }));
      },
      (error) => {
        console.log('Error occurred while retrieving hotel list:', error);
      }
    );
  }
  

  updateHotel(index: number) {
    const hotel = this.filteredHotels[index];
    this.hotelService.updateHotel(hotel).subscribe(
      (response) => {
        console.log('Hotel updated successfully');
        hotel.editable = false;
      },
      (error) => {
        console.log('Error occurred while updating hotel:', error);
      }
    );
  }

  resetForm() {
    this.newHotel = new Hotel();
  }
}