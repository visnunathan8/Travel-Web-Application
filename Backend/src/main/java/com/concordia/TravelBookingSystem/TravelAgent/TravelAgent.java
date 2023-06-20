package com.concordia.TravelBookingSystem.TravelAgent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity(name = "TravelAgent")
public class TravelAgent {

    // Represents the unique identifier for the travel agent
    @Id
    @Column(name = "travelAgentId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int travelAgentId;

    // Represents the name of the travel agent
    @Column(name = "agentName")
    @NotEmpty(message = "*Please provide the AGENTNAME")
    private String agentName;

    // Represents the location of the travel agent
    @Column(name = "location")
    @NotEmpty(message = "*Please provide the LOCATION")
    private String location;

    // Represents the username of the travel agent
    @Column(name = "username")
    @NotEmpty(message = "*Please provide the USERNAME")
    private String username;

    // Represents the password of the travel agent
    @Column(name = "password")
    @NotEmpty(message = "*Please provide the PASSWORD")
    private String password;

    // Getter for the travel agent ID
    public int getTravelAgentId() {
        return travelAgentId;
    }

    // Setter for the travel agent ID
    public void setTravelAgentId(int travelAgentId) {
        this.travelAgentId = travelAgentId;
    }

    // Getter for the agent name
    public String getAgentName() {
        return agentName;
    }

    // Setter for the agent name
    public void setAgentName(String agentName) {
        this.agentName = agentName;
    }

    // Getter for the location
    public String getLocation() {
        return location;
    }

    // Setter for the location
    public void setLocation(String location) {
        this.location = location;
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
