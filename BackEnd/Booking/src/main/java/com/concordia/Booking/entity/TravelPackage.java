package com.concordia.TravelBookingSystem.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;

@Entity(name = "TravelPackage")

public class TravelPackage {

	@Id
	@Column(name = "travelPackageId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int travelPackageId;

	@Column(name = "travelPackageName")
	@NotEmpty(message = "*Please provide the travel package name")
	private String travelPackageName;

	@Column(name = "sourceCity")
	@NotEmpty(message = "*Please provide the source city")
	private String sourceCity;

	@Column(name = "destinationCity")
	@NotEmpty(message = "*Please provide the destination city")
	private String destinationCity;

	@Column(name = "noOfDays")
	private int noOfDays;

	@Column(name = "totalPrice")
	private double totalPrice;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "hotelId")
    private Hotel hotel;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "flightId")
    private Flight flight;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "activitiesId")
    private Activities activities;

	public int getTravelPackageId() {
		return travelPackageId;
	}

	public void setTravelPackageId(int travelPackageId) {
		this.travelPackageId = travelPackageId;
	}

	public String getTravelPackageName() {
		return travelPackageName;
	}

	public void setTravelPackageName(String travelPackageName) {
		this.travelPackageName = travelPackageName;
	}

	public String getSourceCity() {
		return sourceCity;
	}

	public void setSourceCity(String sourceCity) {
		this.sourceCity = sourceCity;
	}

	public String getDestinationCity() {
		return destinationCity;
	}

	public void setDestinationCity(String destinationCity) {
		this.destinationCity = destinationCity;
	}

	public int getNoOfDays() {
		return noOfDays;
	}

	public void setNoOfDays(int noOfDays) {
		this.noOfDays = noOfDays;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	public Flight getFlight() {
		return flight;
	}

	public void setFlight(Flight flight) {
		this.flight = flight;
	}

	public Activities getActivities() {
		return activities;
	}

	public void setActivities(Activities activities) {
		this.activities = activities;
	}

}
