package com.concordia.TravelBookingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.concordia.TravelBookingSystem.entity.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer> {
}
