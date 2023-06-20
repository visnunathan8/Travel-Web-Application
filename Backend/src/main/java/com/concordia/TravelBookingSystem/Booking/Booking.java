package com.concordia.TravelBookingSystem.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Booking")
public class Booking {

    // Represents the unique identifier for the booking
    @Id
    @Column(name = "bookingId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;

    // Represents the customer ID associated with the booking
    @Column(name = "customerId")
    private int customerId;

    // Represents the travel package ID associated with the booking
    @Column(name = "travelPackageId")
    private int travelPackageId;

    // Represents the payment ID associated with the booking
    @Column(name = "paymentId")
    private int paymentId;

    // Represents the total price of the booking
    @Column(name = "totalPrice")
    private double totalPrice;

    // Represents the departure date of the booking
    @Column(name = "departureDate")
    @NotEmpty(message = "*Please provide the DEPARTUREDATE")
    private String departureDate;

    // Getter for the booking ID
    public int getBookingId() {
        return bookingId;
    }

    // Setter for the booking ID
    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    // Getter for the customer ID
    public int getCustomerId() {
        return customerId;
    }

    // Setter for the customer ID
    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    // Getter for the travel package ID
    public int getTravelPackageId() {
        return travelPackageId;
    }

    // Setter for the travel package ID
    public void setTravelPackageId(int travelPackageId) {
        this.travelPackageId = travelPackageId;
    }

    // Getter for the payment ID
    public int getPaymentId() {
        return paymentId;
    }

    // Setter for the payment ID
    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    // Getter for the total price
    public double getTotalPrice() {
        return totalPrice;
    }

    // Setter for the total price
    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
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
