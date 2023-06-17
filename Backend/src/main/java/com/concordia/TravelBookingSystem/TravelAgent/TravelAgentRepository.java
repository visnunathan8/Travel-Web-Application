package com.concordia.TravelBookingSystem.TravelAgent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TravelAgentRepository extends JpaRepository<TravelAgent, Long> {
	TravelAgent findByUsername(String username);

    @Transactional
    void deleteByTravelAgentId(String travelAgentId);

}

