package com.concordia.TravelBookingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.concordia.TravelBookingSystem.entity.TravelPackage;

@Repository
public interface TravelPackageRepository extends JpaRepository<TravelPackage, Integer> {
	TravelPackage findById(int travelPackageId);

    @Transactional
    void deleteById(int travelPackageId);
}
