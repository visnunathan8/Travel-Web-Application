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
  showAddPopup: boolean = false;

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
    const hotel = this.filteredHotels[index];
    if (hotel && hotel.hotelId) {
      const hotelId = hotel.hotelId;
      this.hotelService.deleteHotel(hotelId).subscribe(
        (response) => {
          console.log('Hotel deleted successfully');
          this.getHotelList(); // Fetch the updated list of hotels from the server
        },
        (error) => {
          console.log('Error occurred while deleting hotel:', error);
        }
      );
    } else {
      console.log('Invalid hotel or hotelId');
      // Handle the case when the hotel or hotelId is not valid
    }
  }


  deleteNewHotel() {
    this.newHotel = new Hotel();
    this.showAddForm = false;
  }

  addNewHotel() {
    this.showAddForm = true;
    this.showAddPopup = true;
  }

  cancel() {
    this.showAddPopup = false;
  }

  saveHotel(hotel: Hotel) {
    if (hotel != null) {
      this.hotelService.createHotel(hotel).subscribe(
        (response) => {
          console.log('Hotel saved successfully');
          this.resetForm();
          this.showAddForm = false;
          this.getHotelList(); // Refresh the hotel list
          this.cancel();
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

  applyFilter() {
    if (this.searchKeyword.trim()) {
      this.filteredHotels = this.filteredHotels.filter(hotel =>
        hotel?.hotelName?.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        hotel?.location?.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      // Reset the filteredHotels array to show all hotels
      this.getHotelList();
    }
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
