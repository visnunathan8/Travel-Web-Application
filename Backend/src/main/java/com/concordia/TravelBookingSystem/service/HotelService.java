package com.concordia.TravelBookingSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concordia.TravelBookingSystem.entity.Hotel;
import com.concordia.TravelBookingSystem.repository.HotelRepository;

@Service
public class HotelService {

    private HotelRepository hotelRepository;

    @Autowired
    public HotelService(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    public void addHotel(Hotel hotel) {
        hotelRepository.save(hotel);
    }

    public Hotel findHotelById(int hotelId) {
        return hotelRepository.findById(hotelId).orElse(null);
    }

    public List<Hotel> findAllHotels() {
        return hotelRepository.findAll();
    }

    public Hotel updateHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    public void deleteHotel(int hotelId) {
        hotelRepository.deleteById(hotelId);
    }
}
