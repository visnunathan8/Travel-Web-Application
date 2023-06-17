package com.concordia.TravelBookingSystem.Flight;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlightService {

    private FlightRepository flightRepository;

    @Autowired
    public FlightService(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    public void addFlight(Flight flight) {
        flightRepository.save(flight);
    }

    public Flight findFlightById(int flightId) {
        return flightRepository.findById(flightId).orElse(null);
    }

    public List<Flight> findAllFlights() {
        return flightRepository.findAll();
    }

    public Flight updateFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    public void deleteFlight(int flightId) {
        flightRepository.deleteById(flightId);
    }
}
