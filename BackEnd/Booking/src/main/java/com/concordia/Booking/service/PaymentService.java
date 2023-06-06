package com.concordia.TravelBookingSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concordia.TravelBookingSystem.entity.Payment;
import com.concordia.TravelBookingSystem.repository.PaymentRepository;

@Service
public class PaymentService {

    private PaymentRepository paymentRepository;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public void addPayment(Payment payment) {
        paymentRepository.save(payment);
    }

    public Payment findPaymentById(int paymentId) {
        return paymentRepository.findById(paymentId).orElse(null);
    }

    public List<Payment> findAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment updatePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public void deletePayment(int paymentId) {
        paymentRepository.deleteById(paymentId);
    }
}
