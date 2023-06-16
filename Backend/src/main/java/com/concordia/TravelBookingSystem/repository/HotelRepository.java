package com.concordia.TravelBookingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.concordia.TravelBookingSystem.entity.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {
}
