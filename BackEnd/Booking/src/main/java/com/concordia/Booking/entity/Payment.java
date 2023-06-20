package com.concordia.TravelBookingSystem.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Payment")
public class Payment {

    // Represents the unique identifier for the payment
    @Id
    @Column(name = "paymentId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;

    // Getter for the payment ID
    public int getPaymentId() {
        return paymentId;
    }

    // Setter for the payment ID
    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }
}
