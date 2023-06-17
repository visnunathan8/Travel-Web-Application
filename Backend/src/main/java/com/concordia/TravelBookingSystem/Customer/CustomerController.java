package com.concordia.TravelBookingSystem.Customer;

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

@RestController
@RequestMapping(path = "/customeraccount")
@CrossOrigin(origins="*")
public class CustomerController {

    @Autowired
    CustomerService customerService;
    

    @GetMapping(path = "/checkCustomer")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> checkCustomer(@RequestParam String username,@RequestParam String password, @RequestParam String accountType) {
    	HttpHeaders headers = new HttpHeaders();
        try {
    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(customerService.checkCustomer(username,password,accountType));
	    }catch (Exception e) {
			// TODO: handle exception
	    	e.printStackTrace();
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
		}
    }
    
    
    @PostMapping(path = "/addCustomerAccount")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> addCustomer(@RequestBody Customer Customer) {
    	HttpHeaders headers = new HttpHeaders();
    	    try {
    	    		customerService.addCustomer(Customer);
    	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(Customer);
    	    }catch (Exception e) {
				// TODO: handle exception
    	    	headers.add("Message", "false");
    	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
			}
    }

    @GetMapping(path = "/findallCustomerAccounts")
    @CrossOrigin    
    @ResponseBody
    public ResponseEntity<?> findAllCustomers() {
    	HttpHeaders headers = new HttpHeaders();
    	
	    try {
	    		
	    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(customerService.findAllCustomers());
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
    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(customerService.findByUsername(username));
	    }catch (Exception e) {
			// TODO: handle exception
	    	headers.add("Message", "false");
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to get the user");
		}
    }

    @PostMapping(path = "/updateCustomer")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<?> updateCustomer(@RequestBody Customer Customer) {
HttpHeaders headers = new HttpHeaders();
        
        try {
    		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(customerService.updateCustomer(Customer));
    }catch (Exception e) {
		// TODO: handle exception
    	headers.add("Message", "false");
    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).headers(headers).body("Failed to add the user");
	}
    	
 }
    
}