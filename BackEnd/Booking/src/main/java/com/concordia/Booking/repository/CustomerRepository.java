package com.concordia.TravelBookingSystem.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.concordia.TravelBookingSystem.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
	Customer findByUsername(String username);

    @Transactional
    void deleteByCustomerId(String customerId);

}

