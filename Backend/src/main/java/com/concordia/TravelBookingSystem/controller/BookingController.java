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

import com.concordia.TravelBookingSystem.entity.Booking;
import com.concordia.TravelBookingSystem.service.BookingService;

@RestController
@RequestMapping(path = "/booking")
@CrossOrigin(origins="*")
public class BookingController {

    @Autowired
    BookingService bookingService;
    

    @PostMapping(path = "/addBooking")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> addBooking(@RequestBody Booking booking) {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    bookingService.addBooking(booking);
    	    return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(booking);
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add booking");
    	}
    }

    @GetMapping(path = "/findBookingById")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findBookingById(@RequestParam int bookingId) {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    return ResponseEntity.status(HttpStatus.OK).headers(headers).body(bookingService.findBookingById(bookingId));
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find booking");
    	}
    }

    @GetMapping(path = "/findAllBookings")
    @CrossOrigin    
    @ResponseBody
    public ResponseEntity<?> findAllBookings() {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    return ResponseEntity.status(HttpStatus.OK).headers(headers).body(bookingService.findAllBookings());
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find all bookings");
    	}
    }

    @PostMapping(path = "/updateBooking")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> updateBooking(@RequestBody Booking booking) {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    return ResponseEntity.status(HttpStatus.OK).headers(headers).body(bookingService.updateBooking(booking));
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to update booking");
    	}
    }
    @PostMapping(path = "/deleteBooking")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> deleteBooking(@RequestBody Booking booking) {
        HttpHeaders headers = new HttpHeaders();
        try {
        	System.out.println("==>"+booking.getBookingId());
            bookingService.deleteBooking(booking.getBookingId());
            return ResponseEntity.status(HttpStatus.OK).headers(headers).body("{\"message\": \"Booking deleted successfully\"}");
        } catch (Exception e) {
            headers.add("Message", "false");
            System.out.println("ERRRRRRRRR");
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to delete booking");
        }
    }

}
