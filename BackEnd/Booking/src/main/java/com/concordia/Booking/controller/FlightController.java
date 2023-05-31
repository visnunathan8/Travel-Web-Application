package com.concordia.TravelBookingSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.concordia.TravelBookingSystem.entity.Flight;
import com.concordia.TravelBookingSystem.service.FlightService;

@RestController
@RequestMapping(path = "/flight")
public class FlightController {

    @Autowired
    FlightService flightService;
    

    @PostMapping(path = "/addFlight")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> addFlight(@RequestBody Flight flight) {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    flightService.addFlight(flight);
    	    return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(flight);
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add flight");
    	}
    }

    @GetMapping(path = "/findFlightById")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findFlightById(@RequestParam int flightId) {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    return ResponseEntity.status(HttpStatus.OK).headers(headers).body(flightService.findFlightById(flightId));
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find flight");
    	}
    }

    @GetMapping(path = "/findAllFlights")
    @CrossOrigin    
    @ResponseBody
    public ResponseEntity<?> findAllFlights() {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    return ResponseEntity.status(HttpStatus.OK).headers(headers).body(flightService.findAllFlights());
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find all flights");
    	}
    }

    @PostMapping(path = "/updateFlight")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> updateFlight(@RequestBody Flight flight) {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    return ResponseEntity.status(HttpStatus.OK).headers(headers).body(flightService.updateFlight(flight));
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to update flight");
    	}
    }
}
