import { Component, OnInit } from '@angular/core';
import { Travel, TravelpackageService } from '../service/travelpackage.service';

@Component({
  selector: 'app-travelagent',
  templateUrl: './travelagent.component.html',
  styleUrls: ['./travelagent.component.css']
})
export class TravelagentComponent implements OnInit {
  travels: Travel[] = [];
  flightOptions: string[] = ['1', '2', '3'];
  hotelOptions: string[] = ['1', '2', '3'];
  activitiesOptions: string[] = ['1', '2', '3'];
  showAddForm: boolean = false;
  searchKeyword: string = '';

  constructor(private travelService: TravelpackageService) {}

  ngOnInit() {
    this.getTravelList();
  }

  newTravel = new Travel();

  addNewTravel() {
    this.showAddForm = true;
  }
  deleteNewTravel() {
    this.showAddForm = false;
  }

  saveTravel(travel: Travel) {
    console
    // Assuming you have a function in your service to save the new travel entry
    this.travelService.createTravel(travel).subscribe(
      (response) => {
        console.log('Travel saved successfully');
        this.resetForm();
        this.showAddForm = false;
        this.getTravelList(); // Refresh the travel list
      },
      (error) => {
        console.log('Error occurred while saving travel:', error);
      }
    );
  }

  getTravelList() {
    this.travelService.getTravelList().subscribe(
      (travels: Travel[]) => {
        console.log(travels);
        this.travels = travels.map((travel) => ({ ...travel, editable: false }));
      },
      (error) => {
        console.log('Error occurred while retrieving travel list:', error);
      }
    );
  }

  toggleEdit(index: number) {
    if(this.travels[index].editable) {
      this.updateTravel(index);
    }
    this.travels[index].editable = !this.travels[index].editable;
  }

  updateTravel(index: number) {
    const travel = this.travels[index];
    this.travelService.updateTravel(travel).subscribe(
      (response) => {
        console.log('Travel updated successfully');
        travel.editable = false;
      },
      (error) => {
        console.log('Error occurred while updating travel:', error);
      }
    );
  }

  deleteTravel(index: number) {
    const travelId = this.travels[index].travelPackageId;
    this.travelService.deleteTravel(travelId).subscribe(
      (response) => {
        console.log('Travel deleted successfully');
        this.getTravelList(); // Fetch the updated list of travels from the server
      },
      (error) => {
        console.log('Error occurred while deleting travel:', error);
      }
    );
  }



  resetForm() {
    this.newTravel = new Travel();
  }

  get filteredTravels() {
    return this.travels && this.searchKeyword && this.travels.filter(travel =>
      travel.travelPackageName.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }
}
