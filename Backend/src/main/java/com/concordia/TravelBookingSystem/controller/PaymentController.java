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

import com.concordia.TravelBookingSystem.entity.Payment;
import com.concordia.TravelBookingSystem.service.PaymentService;

@RestController
@RequestMapping(path = "/payment")
@CrossOrigin(origins="*")
public class PaymentController {

    @Autowired
    PaymentService paymentService;
    

    @PostMapping(path = "/addPayment")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> addPayment(@RequestBody Payment payment) {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    paymentService.addPayment(payment);
    	    return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(payment);
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add payment");
    	}
    }

    @GetMapping(path = "/findPaymentById")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findPaymentById(@RequestParam int paymentId) {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    return ResponseEntity.status(HttpStatus.OK).headers(headers).body(paymentService.findPaymentById(paymentId));
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find payment");
    	}
    }

    @GetMapping(path = "/findAllPayments")
    @CrossOrigin    
    @ResponseBody
    public ResponseEntity<?> findAllPayments() {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    return ResponseEntity.status(HttpStatus.OK).headers(headers).body(paymentService.findAllPayments());
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find all payments");
    	}
    }

    @PostMapping(path = "/updatePayment")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> updatePayment(@RequestBody Payment payment) {
    	HttpHeaders headers = new HttpHeaders();
    	try {
    	    return ResponseEntity.status(HttpStatus.OK).headers(headers).body(paymentService.updatePayment(payment));
    	} catch (Exception e) {
    	    headers.add("Message", "false");
    	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to update payment");
    	}
    }
}
