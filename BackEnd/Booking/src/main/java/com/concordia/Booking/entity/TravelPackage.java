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

    // Represents the unique identifier for the travel package
    @Id
    @Column(name = "travelPackageId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int travelPackageId;

    // Represents the name of the travel package
    @Column(name = "travelPackageName")
    @NotEmpty(message = "*Please provide the travel package name")
    private String travelPackageName;

    // Represents the source city of the travel package
    @Column(name = "sourceCity")
    @NotEmpty(message = "*Please provide the source city")
    private String sourceCity;

    // Represents the destination city of the travel package
    @Column(name = "destinationCity")
    @NotEmpty(message = "*Please provide the destination city")
    private String destinationCity;

    // Represents the number of days in the travel package
    @Column(name = "noOfDays")
    private int noOfDays;

    // Represents the total price of the travel package
    @Column(name = "totalPrice")
    private double totalPrice;

    // Represents the ID of the associated hotel
    @Column(name = "hotelId")
    private int hotelId;

    // Represents the ID of the associated flight
    @Column(name = "flightId")
    private int flightId;

    // Represents the ID of the associated activities
    @Column(name = "activitiesId")
    private int activitiesId;

    // Represents the departure date of the travel package
    @Column(name = "departureDate")
    private String departureDate;

    // Getter for the travel package ID
    public int getTravelPackageId() {
        return travelPackageId;
    }

    // Setter for the travel package ID
    public void setTravelPackageId(int travelPackageId) {
        this.travelPackageId = travelPackageId;
    }

    // Getter for the travel package name
    public String getTravelPackageName() {
        return travelPackageName;
    }

    // Setter for the travel package name
    public void setTravelPackageName(String travelPackageName) {
        this.travelPackageName = travelPackageName;
    }

    // Getter for the source city
    public String getSourceCity() {
        return sourceCity;
    }

    // Setter for the source city
    public void setSourceCity(String sourceCity) {
        this.sourceCity = sourceCity;
    }

    // Getter for the destination city
    public String getDestinationCity() {
        return destinationCity;
    }

    // Setter for the destination city
    public void setDestinationCity(String destinationCity) {
        this.destinationCity = destinationCity;
    }

    // Getter for the number of days
    public int getNoOfDays() {
        return noOfDays;
    }

    // Setter for the number of days
    public void setNoOfDays(int noOfDays) {
        this.noOfDays = noOfDays;
    }

    // Getter for the total price
    public double getTotalPrice() {
        return totalPrice;
    }

    // Setter for the total price
    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    // Getter for the hotel ID
    public int getHotelId() {
        return hotelId;
    }

    // Setter for the hotel ID
    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    // Getter for the flight ID
    public int getFlightId() {
        return flightId;
    }

    // Setter for the flight ID
    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    // Getter for the activities ID
    public int getActivitiesId() {
        return activitiesId;
    }

    // Setter for the activities ID
    public void setActivitiesId(int activitiesId) {
        this.activitiesId = activitiesId;
    }

    // Getter for the departure date
    public String getDepartureDate() {
        return departureDate;
    }

    // Setter for the departure date
    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }
}
