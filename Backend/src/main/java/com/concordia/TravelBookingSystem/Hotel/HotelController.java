package com.concordia.TravelBookingSystem.Hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/hotel")
@CrossOrigin(origins="*")
public class HotelController {

    @Autowired
    HotelService hotelService;

    @PostMapping(path = "/addHotel")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> addHotel(@RequestBody Hotel hotel) {
        HttpHeaders headers = new HttpHeaders();
        try {
            hotelService.addHotel(hotel);
            return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(hotel);
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add hotel");
        }
    }

    @GetMapping(path = "/findHotelById")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findHotelById(@RequestParam int hotelId) {
        HttpHeaders headers = new HttpHeaders();
        try {
            Hotel hotel = hotelService.findHotelById(hotelId);
            if (hotel != null) {
                return ResponseEntity.status(HttpStatus.OK).headers(headers).body(hotel);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).headers(headers).body("Hotel not found");
            }
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find hotel");
        }
    }

    @GetMapping(path = "/findAllHotels")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findAllHotels() {
        HttpHeaders headers = new HttpHeaders();
        try {
            return ResponseEntity.status(HttpStatus.OK).headers(headers).body(hotelService.findAllHotels());
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find all hotels");
        }
    }

    @PostMapping(path = "/updateHotel")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> updateHotel(@RequestBody Hotel hotel) {
        HttpHeaders headers = new HttpHeaders();
        try {
            Hotel updatedHotel = hotelService.updateHotel(hotel);
            if (updatedHotel != null) {
                return ResponseEntity.status(HttpStatus.OK).headers(headers).body(updatedHotel);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).headers(headers).body("Hotel not found");
            }
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to update hotel");
        }
    }

    @PostMapping(path = "/deleteHotel")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> deleteHotel(@RequestParam int hotelId) {
        HttpHeaders headers = new HttpHeaders();
        try {
            hotelService.deleteHotel(hotelId);
            return ResponseEntity.ok().headers(headers).body("{\"message\": \"Hotel deleted successfully\"}");
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("{\"error\": \"Failed to delete hotel\"}");
        }
    }
}
