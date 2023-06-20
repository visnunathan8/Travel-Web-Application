package com.concordia.TravelBookingSystem.Customer;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Customer")
public class Customer {
    
    // Represents the unique identifier for the customer
    @Id
    @Column(name = "customerId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int customerId;

    // Represents the first name of the customer
    @Column(name = "firstName")
    @NotEmpty(message = "*Please provide your FIRSTNAME")
    String firstName;

    // Represents the last name of the customer
    @Column(name = "lastName")
    @NotEmpty(message = "*Please provide your LASTNAME")
    String lastName;

    // Represents the date of birth of the customer
    @Column(name = "dob")
    @NotEmpty(message = "*Please provide your DOB")
    String dob;

    // Represents the email address of the customer
    @Column(name = "email")
    @NotEmpty(message = "*Please provide your EMAIL")
    String email;

    // Represents the username of the customer
    @Column(name = "username")
    @NotEmpty(message = "*Please provide your USERNAME")
    String username;

    // Represents the password of the customer
    @Column(name = "password")
    @NotEmpty(message = "*Please provide your PASSWORD")
    String password;

    // Getter for the customer ID
    public int getCustomerId() {
        return customerId;
    }

    // Setter for the customer ID
    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    // Getter for the first name
    public String getFirstName() {
        return firstName;
    }

    // Setter for the first name
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    // Getter for the last name
    public String getLastName() {
        return lastName;
    }

    // Setter for the last name
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    // Getter for the date of birth
    public String getDob() {
        return dob;
    }

    // Setter for the date of birth
    public void setDob(String dob) {
        this.dob = dob;
    }

    // Getter for the email address
    public String getEmail() {
        return email;
    }

    // Setter for the email address
    public void setEmail(String email) {
        this.email = email;
    }

    // Getter for the username
    public String getUsername() {
        return username;
    }

    // Setter for the username
    public void setUsername(String username) {
        this.username = username;
    }

    // Getter for the password
    public String getPassword() {
        return password;
    }

    // Setter for the password
    public void setPassword(String password) {
        this.password = password;
    }
}
