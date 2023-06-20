package com.concordia.TravelBookingSystem.TravelPackage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TravelPackageService {

    private TravelPackageRepository travelPackageRepository;

    @Autowired
    public TravelPackageService(TravelPackageRepository travelPackageRepository) {
        this.travelPackageRepository = travelPackageRepository;
    }

    public void addTravelPackage(TravelPackage travelPackage) {
        travelPackageRepository.save(travelPackage);
    }

    public TravelPackage findTravelPackage(int travelPackageId) {
        return travelPackageRepository.findById(travelPackageId);
    }

    public List<TravelPackage> findAllTravelPackages() {
        return travelPackageRepository.findAll();
    }

    public List<TravelPackage> findTravelPackagecustomerId(int customerId) {
        return travelPackageRepository.findByCustomerIdOrIsCustomerCreatedFalse(customerId);
    }
    
    public TravelPackage updateTravelPackage(TravelPackage travelPackage) {
        return travelPackageRepository.save(travelPackage);
    }

    public void deleteTravelPackage(int travelPackageId) {
        travelPackageRepository.deleteById(travelPackageId);
    }
}
