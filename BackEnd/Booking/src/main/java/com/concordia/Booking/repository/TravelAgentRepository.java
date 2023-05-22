package com.concordia.TravelBookingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.concordia.TravelBookingSystem.entity.TravelAgent;

@Repository
public interface TravelAgentRepository extends JpaRepository<TravelAgent, Long> {
	TravelAgent findByUsername(String username);

    @Transactional
    void deleteByTravelAgentId(String travelAgentId);

}

