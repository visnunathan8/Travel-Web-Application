import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Activity {
  editable: boolean;
  constructor(
    public activitiesId?: number,
    public activityName?: string,
    public location?: string,
    public duration?: string,
    public description?: string,
    public price?: number
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  constructor(private http: HttpClient) {}
  getActivities() {
    return this.http.get<Activity[]>('http://localhost:8081/activities/findAllActivities');
  }

  createActivity(activity: Activity) {
    return this.http.post<Activity>('http://localhost:8081/activities/addActivity', activity);
  }

  updateActivity(activity: Activity) {
    return this.http.post<Activity>('http://localhost:8081/activities/updateActivity', activity);
  }

  deleteActivity(activitiesId: number) {
    return this.http.post<string>(`http://localhost:8081/activities/deleteActivity?activitiesId=${activitiesId}`, null);
  }

   // getActivities() {
  //   return this.http.get<Activity[]>('https://floating-everglades-27882.herokuapp.com/activities/findAllActivities');
  // }

  // createActivity(activity: Activity) {
  //   return this.http.post<Activity>('https://floating-everglades-27882.herokuapp.com/activities/addActivity', activity);
  // }

  // updateActivity(activity: Activity) {
  //   return this.http.post<Activity>('https://floating-everglades-27882.herokuapp.com/activities/updateActivity', activity);
  // }

  // deleteActivity(activitiesId: number) {
  //   return this.http.post<string>(`https://floating-everglades-27882.herokuapp.com/activities/deleteActivity?activitiesId=${activitiesId}`, null);
  // }

}
