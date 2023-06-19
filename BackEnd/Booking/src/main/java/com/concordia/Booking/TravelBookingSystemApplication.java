package com.concordia.TravelBookingSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication(scanBasePackages = {
    "com.concordia.TravelBookingSystem.controller",
    "com.concordia.TravelBookingSystem.entity",
    "com.concordia.TravelBookingSystem.repository",
    "com.concordia.TravelBookingSystem.service"
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
