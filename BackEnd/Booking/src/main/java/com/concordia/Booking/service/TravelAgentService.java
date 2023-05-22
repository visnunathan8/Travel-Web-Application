package com.concordia.TravelBookingSystem.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.concordia.TravelBookingSystem.entity.TravelAgent;
import com.concordia.TravelBookingSystem.repository.TravelAgentRepository;

@Service("TravelAgentService")
@ComponentScan("BCryptPasswordEncoder")
public class TravelAgentService {
	@Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private TravelAgentRepository travelAgentRepository;
	
	@Autowired
    public TravelAgentService(TravelAgentRepository travelAgentRepository) {
        this.travelAgentRepository = travelAgentRepository; 
    }
	
	public boolean addTravelAgent(TravelAgent travelAgentAccount) {
    	travelAgentAccount.setPassword(bCryptPasswordEncoder.encode(travelAgentAccount.getPassword()));
    	TravelAgent userAccountList = travelAgentRepository.findByUsername(travelAgentAccount.getUsername());
    	if(userAccountList==null) {
    		travelAgentRepository.save(travelAgentAccount);
    		return true;
    	}
        return false;
    }
    
	public long checkTravelAgent(String username,String password, String accountType) {
		TravelAgent travelAgentAccountList = travelAgentRepository.findByUsername(username);
        String pass = bCryptPasswordEncoder.encode(password);
        System.out.println("PASSWORD : "+pass+"===>"+travelAgentAccountList.getPassword()+" "+accountType);
        System.out.println("ENCRYPTION" + bCryptPasswordEncoder.matches(password, travelAgentAccountList.getPassword()));
        if(bCryptPasswordEncoder.matches(password, travelAgentAccountList.getPassword()) && accountType.equals("travelAgent")) {
        	return 1;
        }else if(bCryptPasswordEncoder.matches(password, travelAgentAccountList.getPassword()) && accountType.equals("admin")) {
        	return 1;
        }
        return 0;
    }
	
	 
    public List<TravelAgent> findAllTravelAgents() {
        List<TravelAgent> userAccountList = (List<TravelAgent>) travelAgentRepository.findAll();
        if (userAccountList != null) {
            return userAccountList;
        }
        return null;
    }

    
    public TravelAgent findByUsername(String username) {
    	TravelAgent travelAgentAccountList = travelAgentRepository.findByUsername(username);
        if (travelAgentAccountList != null) {
           return travelAgentAccountList;
        }
        return null;
    }

   
    public String updateTravelAgent(TravelAgent travelAgentAccount) {

    	TravelAgent userAccountList = travelAgentRepository.findByUsername(travelAgentAccount.getUsername());

        if (userAccountList != null) {            
        	userAccountList.setUsername(travelAgentAccount.getUsername());
        	userAccountList.setPassword(travelAgentAccount.getPassword());
        	travelAgentRepository.save(userAccountList);
            return ("User data update successfully.");            
        }
        return "No record found";
    }
	
}




