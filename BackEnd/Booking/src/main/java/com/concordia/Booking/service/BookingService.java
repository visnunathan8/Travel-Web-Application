package com.concordia.TravelBookingSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concordia.TravelBookingSystem.entity.Booking;
import com.concordia.TravelBookingSystem.repository.BookingRepository;

@Service
public class BookingService {

    private BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public void addBooking(Booking booking) {
        bookingRepository.save(booking);
    }

    public Booking findBookingById(int bookingId) {
        return bookingRepository.findById(bookingId).orElse(null);
    }

    public List<Booking> findAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking updateBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public void deleteBooking(int bookingId) {
        bookingRepository.deleteById(bookingId);
    }
}
