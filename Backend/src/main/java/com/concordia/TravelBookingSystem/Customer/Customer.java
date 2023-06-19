package com.concordia.TravelBookingSystem.Customer;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "Customer")
public class Customer {

	@Id
	@Column(name = "customerId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int customerId;

	@Column(name = "firstName")
	@NotEmpty(message = "*Please provide your FIRSTNAME")
	String firstName;

	@Column(name = "lastName")
	@NotEmpty(message = "*Please provide your LASTNAME")
	String lastName;

	@Column(name = "dob")
	@NotEmpty(message = "*Please provide your DOB")
	String dob;

	@Column(name = "email")
	@NotEmpty(message = "*Please provide your EMAIL")
	String email;

	@Column(name = "username")
	@NotEmpty(message = "*Please provide your USERNAME")
	String username;

	@Column(name = "password")
	@NotEmpty(message = "*Please provide your PASSWORD")
	String password;

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
