package com.concordia.TravelBookingSystem.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Hotel")
public class Hotel {

	@Id
	@Column(name = "hotelId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int hotelId;

	@Column(name = "hotelName")
	@NotEmpty(message = "*Please provide the HOTELNAME")
	private String hotelName;

	@Column(name = "location")
	@NotEmpty(message = "*Please provide the LOCATION")
	private String location;

	@Column(name = "pricePerNight")
	private double pricePerNight;

	@Column(name = "amenities")
	private String amenities;

	public int getHotelId() {
		return hotelId;
	}

	public void setHotelId(int hotelId) {
		this.hotelId = hotelId;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public double getPricePerNight() {
		return pricePerNight;
	}

	public void setPricePerNight(double pricePerNight) {
		this.pricePerNight = pricePerNight;
	}

	public String getAmenities() {
		return amenities;
	}

	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}
}
