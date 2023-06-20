package com.concordia.TravelBookingSystem.TravelPackage;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TravelPackageRepository extends JpaRepository<TravelPackage, Integer> {
	TravelPackage findById(int travelPackageId);

    @Transactional
    void deleteById(int travelPackageId);
    
    List<TravelPackage> findByCustomerIdOrIsCustomerCreatedFalse(int customerId);

}
