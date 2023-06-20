package com.concordia.TravelBookingSystem.Flight;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Flight")
public class Flight {
    
    // Represents the unique identifier for the flight
    @Id
    @Column(name = "flightId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int flightId;

    // Represents the airline name
    @Column(name = "airline")
    @NotEmpty(message = "*Please provide the AIRLINE")
    private String airline;

    // Represents the flight number
    @Column(name = "flightNumber")
    private String flightNumber;

    // Represents the ticket price for the flight
    @Column(name = "ticketPrice")
    private double ticketPrice;

    // Represents the number of seats available on the flight
    @Column(name = "noOfSeats")
    private int noOfSeats;

    // Getter for the flight ID
    public int getFlightId() {
        return flightId;
    }

    // Setter for the flight ID
    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    // Getter for the airline name
    public String getAirline() {
        return airline;
    }

    // Setter for the airline name
    public void setAirline(String airline) {
        this.airline = airline;
    }

    // Getter for the flight number
    public String getFlightNumber() {
        return flightNumber;
    }

    // Setter for the flight number
    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    // Getter for the ticket price
    public double getTicketPrice() {
        return ticketPrice;
    }

    // Setter for the ticket price
    public void setTicketPrice(double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    // Getter for the number of seats
    public int getNoOfSeats() {
        return noOfSeats;
    }

    // Setter for the number of seats
    public void setNoOfSeats(int noOfSeats) {
        this.noOfSeats = noOfSeats;
    }
}
