package com.concordia.TravelBookingSystem.Flight;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Flight")
public class Flight {
	@Id
	@Column(name = "flightId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int flightId;

	@Column(name = "airline")
	@NotEmpty(message = "*Please provide the AIRLINE")
	private String airline;

	@Column(name = "flightNumber")
	private String flightNumber;

	@Column(name = "ticketPrice")
	private double ticketPrice;

	@Column(name = "noOfSeats")
	private int noOfSeats;

	public int getFlightId() {
		return flightId;
	}

	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}

	public String getAirline() {
		return airline;
	}

	public void setAirline(String airline) {
		this.airline = airline;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public double getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(double ticketPrice) {
		this.ticketPrice = ticketPrice;
	}

	public int getNoOfSeats() {
		return noOfSeats;
	}

	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}

}
