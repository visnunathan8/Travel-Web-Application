package com.concordia.TravelBookingSystem.Customer;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service("userAccountService")
public class CustomerService {
	@Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
    public CustomerService(CustomerRepository customerRepository) {//,BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.customerRepository = customerRepository; 
    }
	
	public boolean addCustomer(Customer customeraccount) {
    	customeraccount.setPassword(bCryptPasswordEncoder.encode(customeraccount.getPassword()));
    	Customer userAccountList = customerRepository.findByUsername(customeraccount.getUsername());
    	if(userAccountList==null) {
    		customerRepository.save(customeraccount);
    		return true;
    	}
        return false;
    }
    
	public long checkCustomer(String username,String password, String accountType) {
		System.out.println("Starting");
		Customer userAccountList = customerRepository.findByUsername(username);
        String pass = bCryptPasswordEncoder.encode(password);
        System.out.println("PASSWORD : "+pass+"===>"+userAccountList.getPassword());
        if(bCryptPasswordEncoder.matches(password, userAccountList.getPassword()) && accountType.equals("customer")) {
        	return 1;
        }
        return 0;
    }
	
	 
    public List<Customer> findAllCustomers() {
        List<Customer> userAccountList = (List<Customer>) customerRepository.findAll();
        if (userAccountList != null) {
            return userAccountList;
        }
        return null;
    }

    
    public Customer findByUsername(String username) {
    	Customer userAccountList = customerRepository.findByUsername(username);
    	System.out.println(userAccountList.getCustomerId()+" ----> "+userAccountList.getFirstName());
        if (userAccountList != null) {
           return userAccountList;
        }
        return null;
    }

   
    public String updateCustomer(Customer useraccount) {

    	Customer userAccountList = customerRepository.findByUsername(useraccount.getUsername());

        if (userAccountList != null) {            
        	userAccountList.setUsername(useraccount.getUsername());
        	userAccountList.setPassword(useraccount.getPassword());
            customerRepository.save(userAccountList);
            return ("User data update successfully.");            
        }
        return "No record found";
    }
	
}




