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

import com.concordia.TravelBookingSystem.entity.TravelAgent;
import com.concordia.TravelBookingSystem.service.TravelAgentService;

@RestController
@RequestMapping(path = "/travelagent")
public class TravelAgentController {

    @Autowired
    TravelAgentService travelAgentService;
    

    @GetMapping(path = "/checkTravelAgent")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> CheckTravelAgent(@RequestParam String username,@RequestParam String password, @RequestParam String accountType) {
    	HttpHeaders headers = new HttpHeaders();
        try {
    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(travelAgentService.checkTravelAgent(username,password,accountType));
    }catch (Exception e) {
		// TODO: handle exception
    	headers.add("Message", "false");
    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
	}
    }
    
    
    @PostMapping(path = "/addTravelAgentAccount")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> addTravelAgent(@RequestBody TravelAgent travelAgent) {
    	HttpHeaders headers = new HttpHeaders();
    	    try {
    	    		travelAgentService.addTravelAgent(travelAgent);
    	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(travelAgent);
    	    }catch (Exception e) {
				// TODO: handle exception
    	    	headers.add("Message", "false");
    	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
			}
    }

    @GetMapping(path = "/findallTravelAgentAccounts")
    @CrossOrigin    
    @ResponseBody
    public ResponseEntity<?> findAllTravelAgents() {
    	HttpHeaders headers = new HttpHeaders();
    	
	    try {
	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(travelAgentService.findAllTravelAgents());
	    }catch (Exception e) {
			// TODO: handle exception
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to find all users");
		}
       
    }


    @GetMapping(path = "/findbyUsername")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> findByUsername(@RequestParam String username) {
    	HttpHeaders headers = new HttpHeaders();
        
        try {
    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(travelAgentService.findByUsername(username));
    }catch (Exception e) {
		// TODO: handle exception
    	headers.add("Message", "false");
    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
	}
    }

    @PostMapping(path = "/updateTravelAgent")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> updateTravelAgent(@RequestBody TravelAgent travelAgent) {
HttpHeaders headers = new HttpHeaders();
        
        try {
    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(travelAgentService.updateTravelAgent(travelAgent));
    }catch (Exception e) {
		// TODO: handle exception
    	headers.add("Message", "false");
    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
	}
    	
 }
    
}