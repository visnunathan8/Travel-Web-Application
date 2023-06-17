package com.concordia.TravelBookingSystem.Booking;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Booking")
public class Booking {

	@Id
    @Column(name = "bookingId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;

    @Column(name = "customerId")
    private int customerId;

    @Column(name = "travelPackageId")
    private int travelPackageId;

    @Column(name = "paymentId")
    private int paymentId;

    @Column(name = "totalPrice")
    private double totalPrice;

    @Column(name = "departureDate")
    @NotEmpty(message = "*Please provide the DEPARTUREDATE")
    private String departureDate;
    
    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public int getTravelPackageId() {
        return travelPackageId;
    }

    public void setTravelPackageId(int travelPackageId) {
        this.travelPackageId = travelPackageId;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }
}
