package com.concordia.TravelBookingSystem.controller;

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

import com.concordia.TravelBookingSystem.entity.TravelPackage;
import com.concordia.TravelBookingSystem.service.TravelPackageService;

@RestController
@RequestMapping(path = "/travelpackage")
public class TravelPackageController {

    @Autowired
    TravelPackageService travelPackageService;

    @PostMapping(path = "/addTravelPackage")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> addTravelPackage(@RequestBody TravelPackage travelPackage) {
        HttpHeaders headers = new HttpHeaders();
        try {
            travelPackageService.addTravelPackage(travelPackage);
            return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(travelPackage);
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the travel package");
        }
    }

    @GetMapping(path = "/findTravelPackage")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findTravelPackage(@RequestParam int travelPackageId) {
        HttpHeaders headers = new HttpHeaders();
        try {
            return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(travelPackageService.findTravelPackage(travelPackageId));
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find the travel package");
        }
    }

    @GetMapping(path = "/findAllTravelPackages")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findAllTravelPackages() {
        HttpHeaders headers = new HttpHeaders();
        try {
            return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(travelPackageService.findAllTravelPackages());
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find all travel packages");
        }
    }

    @PostMapping(path = "/updateTravelPackage")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> updateTravelPackage(@RequestBody TravelPackage travelPackage) {
        HttpHeaders headers = new HttpHeaders();
        try {
            return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(travelPackageService.updateTravelPackage(travelPackage));
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to update the travel package");
        }
    }

    @PostMapping(path = "/deleteTravelPackage")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> deleteTravelPackage(@RequestBody int travelPackageId) {
        HttpHeaders headers = new HttpHeaders();
        try {
            travelPackageService.deleteTravelPackage(travelPackageId);
            return ResponseEntity.status(HttpStatus.OK).headers(headers).body("Travel package deleted successfully");
        } catch (Exception e) {
            headers.add("Message", "false");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to delete the travel package");
        }
    }

}
