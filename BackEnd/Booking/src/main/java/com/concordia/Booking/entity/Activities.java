package com.concordia.TravelBookingSystem.entity;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Activities")
public class Activities {
    
    // Represents the unique identifier for the activity
    @Id 
    @Column(name = "activitiesId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int activitiesId;

    // Represents the name of the activity
    @Column(name = "activityName")
    @NotEmpty(message = "*Please provide the ACTIVITYNAME")
    private String activityName;

    // Represents the location of the activity
    @Column(name = "location")
    @NotEmpty(message = "*Please provide the LOCATION")
    private String location;

    // Represents the duration of the activity
    @Column(name = "duration")
    private int duration;

    // Represents the description of the activity
    @Column(name = "description")
    private String description;

    // Represents the price of the activity
    @Column(name = "price")
    private double price;

    // Getter for the activities ID
    public int getActivitiesId() {
        return activitiesId;
    }

    // Setter for the activities ID
    public void setActivitiesId(int activitiesId) {
        this.activitiesId = activitiesId;
    }

    // Getter for the activity name
    public String getActivityName() {
        return activityName;
    }

    // Setter for the activity name
    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }

    // Getter for the location
    public String getLocation() {
        return location;
    }

    // Setter for the location
    public void setLocation(String location) {
        this.location = location;
    }

    // Getter for the duration
    public int getDuration() {
        return duration;
    }

    // Setter for the duration
    public void setDuration(int duration) {
        this.duration = duration;
    }

    // Getter for the description
    public String getDescription() {
        return description;
    }

    // Setter for the description
    public void setDescription(String description) {
        this.description = description;
    }

    // Getter for the price
    public double getPrice() {
        return price;
    }

    // Setter for the price
    public void setPrice(double price) {
        this.price = price;
    }
}
