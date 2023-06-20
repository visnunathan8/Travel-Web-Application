package com.concordia.TravelBookingSystem.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Hotel")
public class Hotel {
    
    // Represents the unique identifier for the hotel
    @Id
    @Column(name = "hotelId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int hotelId;

    // Represents the name of the hotel
    @Column(name = "hotelName")
    @NotEmpty(message = "*Please provide the HOTELNAME")
    private String hotelName;

    // Represents the location of the hotel
    @Column(name = "location")
    @NotEmpty(message = "*Please provide the LOCATION")
    private String location;

    // Represents the price per night for the hotel
    @Column(name = "pricePerNight")
    private double pricePerNight;

    // Represents the amenities available at the hotel
    @Column(name = "amenities")
    private String amenities;

    // Getter for the hotel ID
    public int getHotelId() {
        return hotelId;
    }

    // Setter for the hotel ID
    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    // Getter for the hotel name
    public String getHotelName() {
        return hotelName;
    }

    // Setter for the hotel name
    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    // Getter for the location
    public String getLocation() {
        return location;
    }

    // Setter for the location
    public void setLocation(String location) {
        this.location = location;
    }

    // Getter for the price per night
    public double getPricePerNight() {
        return pricePerNight;
    }

    // Setter for the price per night
    public void setPricePerNight(double pricePerNight) {
        this.pricePerNight = pricePerNight;
    }

    // Getter for the amenities
    public String getAmenities() {
        return amenities;
    }

    // Setter for the amenities
    public void setAmenities(String amenities) {
        this.amenities = amenities;
    }
}
