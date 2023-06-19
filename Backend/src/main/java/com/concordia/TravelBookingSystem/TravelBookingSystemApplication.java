package com.concordia.TravelBookingSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication(scanBasePackages = {
    "com.concordia.TravelBookingSystem.Activities",
    "com.concordia.TravelBookingSystem.Booking",
    "com.concordia.TravelBookingSystem.Customer",
    "com.concordia.TravelBookingSystem.Flight",
    "com.concordia.TravelBookingSystem.Hostel",
    "com.concordia.TravelBookingSystem.Payment",
    "com.concordia.TravelBookingSystem.TravelAgent",
    "com.concordia.TravelBookingSystem.TravelPackage"
})
@CrossOrigin(origins="*")
public class TravelBookingSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravelBookingSystemApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
