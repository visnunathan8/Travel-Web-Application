import { Component, OnInit } from '@angular/core';
import { ActivitiesService, Activity } from '../service/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [];
  showAddForm: boolean = false;
  searchKeyword: string = '';
  filteredActivities: Activity[] = [];
  showAddPopup: boolean = false;

  newActivity: Activity = new Activity();
  constructor(private activityService: ActivitiesService) { }

  ngOnInit() {
    this.getActivityList();
    this.applyFilters(); // Apply initial filters
  }

  addNewActivity() {
    this.showAddForm = true;
    this.showAddPopup = true;
  }

  cancel() {
    this.showAddPopup = false;
  }
  deleteNewActivity() {
    this.newActivity = new Activity();
    this.showAddForm = false;
  }

  saveActivity(activity: Activity) {
    activity.activitiesId = Number(activity.activitiesId)
    if (activity.activityName && activity.location && activity.price && activity.duration) {
      this.activityService.createActivity(activity).subscribe(
        (response) => {
          console.log('Activity saved successfully');
          this.resetForm();
          this.showAddForm = false;
          this.getActivityList(); // Refresh the activity list
          this.cancel();
        },
        (error) => {
          console.log('Error occurred while saving activity:', error);
        }
      );
    } else {
      alert('Please enter all required fields!');
    }
  }

  getActivityList() {
    this.activityService.getActivities().subscribe(
      (activities: Activity[]) => {
        console.log(activities);
        this.activities = activities;
        this.filteredActivities = activities; // Initialize filteredActivities
      },
      (error) => {
        console.log('Error occurred while retrieving activity list:', error);
      }
    );
  }


  applyFilters() {
    if (this.searchKeyword.trim() === '') {
      this.filteredActivities = this.activities; // If search keyword is empty, display all activities
    } else {
      this.filteredActivities = this.activities.filter(activity =>
        activity?.activityName?.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  }


  toggleEdit(index: number) {
    const activity = this.activities[index];
    if (activity.editable) {
      this.updateActivity(index);
    }
    activity.editable = !activity.editable;
  }

  updateActivity(index: number) {
    const activity = this.activities[index];
    this.activityService.updateActivity(activity).subscribe(
      (response) => {
        console.log('Activity updated successfully');
        activity.editable = false;
      },
      (error) => {
        console.log('Error occurred while updating activity:', error);
      }
    );
  }

  deleteActivity(index: number) {
    const activityId = this.activities[index].activitiesId;
    this.activityService.deleteActivity(Number(activityId)).subscribe(
      (response) => {
        console.log('Activity deleted successfully');
        this.getActivityList(); // Fetch the updated list of activities from the server
      },
      (error) => {
        console.log('Error occurred while deleting activity:', error);
      }
    );
  }

  resetForm() {
    this.newActivity = new Activity();
  }

  // get filteredActivities() {
  //   return this.activities && this.searchKeyword && this.activities.filter(activity =>
  //     activity.activityName.toLowerCase().includes(this.searchKeyword.toLowerCase())
  //   );
  // }
}
