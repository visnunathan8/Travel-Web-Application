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

    @Column(name = "hotelId")
    private int hotelId;

    @Column(name = "flightId")
    private int flightId;
<<<<<<< HEAD:Backend/src/main/java/com/concordia/TravelBookingSystem/entity/TravelPackage.java

    @Column(name = "activitiesId")
    private int activitiesId;
    
    @Column(name = "isCustomerCreated")
    private boolean isCustomerCreated;
    
    @Column(name = "customerId")
    private int customerId;
=======

    @Column(name = "activitiesId")
    private int activitiesId;

    @Column(name = "departureDate")
    private String departureDate;
>>>>>>> 0ebc7e6fd201b126ceca7822bffae9049c758ee8:BackEnd/Booking/src/main/java/com/concordia/Booking/entity/TravelPackage.java
    
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

	public int getHotelId() {
		return hotelId;
	}

	public void setHotelId(int hotelId) {
		this.hotelId = hotelId;
	}

	public int getFlightId() {
		return flightId;
	}

	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}

	public int getActivitiesId() {
		return activitiesId;
	}

	public void setActivitiesId(int activitiesId) {
		this.activitiesId = activitiesId;
	}

<<<<<<< HEAD:Backend/src/main/java/com/concordia/TravelBookingSystem/entity/TravelPackage.java
	public boolean getIsCustomerCreated() {
		return isCustomerCreated;
	}

	public void setIsCustomerCreated(boolean isCustomerCreated) {
		this.isCustomerCreated = isCustomerCreated;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}	
=======
	public String getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}

	
>>>>>>> 0ebc7e6fd201b126ceca7822bffae9049c758ee8:BackEnd/Booking/src/main/java/com/concordia/Booking/entity/TravelPackage.java

}
