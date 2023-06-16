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
	@Id 
	@Column(name = "activitiesId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int activitiesId;

	@Column(name = "activityName")
	@NotEmpty(message = "*Please provide the ACTIVITYNAME")
	private String activityName;

	@Column(name = "location")
	@NotEmpty(message = "*Please provide the LOCATION")
	private String location;

	@Column(name = "duration")
	private int duration;

	@Column(name = "description")
	private String description;

	@Column(name = "price")
	private double price;

	public int getActivitiesId() {
		return activitiesId;
	}

	public void setActivitiesId(int activitiesId) {
		this.activitiesId = activitiesId;
	}

	public String getActivityName() {
		return activityName;
	}

	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
}
