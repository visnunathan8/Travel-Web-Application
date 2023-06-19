package com.concordia.TravelBookingSystem.TravelAgent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
@Entity(name = "TravelAgent")

public class TravelAgent {

	@Id
	@Column(name = "travelAgentId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int travelAgentId;

	@Column(name = "agentName")
	@NotEmpty(message = "*Please provide the AGENTNAME")
	private String agentName;

	@Column(name = "location")
	@NotEmpty(message = "*Please provide the LOCATION")
	private String location;

	@Column(name = "username")
	@NotEmpty(message = "*Please provide the USERNAME")
	private String username;

	@Column(name = "password")
	@NotEmpty(message = "*Please provide the PASSWORD")
	private String password;

	public int getTravelAgentId() {
		return travelAgentId;
	}

	public void setTravelAgentId(int travelAgentId) {
		this.travelAgentId = travelAgentId;
	}

	public String getAgentName() {
		return agentName;
	}

	public void setAgentName(String agentName) {
		this.agentName = agentName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
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
