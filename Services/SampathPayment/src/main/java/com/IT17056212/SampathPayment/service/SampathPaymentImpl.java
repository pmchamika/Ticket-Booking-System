package com.IT17056212.SampathPayment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.IT17056212.SampathPayment.model.roads;
import com.IT17056212.SampathPayment.model.sampathpayment;
import com.IT17056212.SampathPayment.repositories.PaymentRepository;
import com.IT17056212.SampathPayment.repositories.SampathPaymentRepository;

@Service
public class SampathPaymentImpl implements SampathPaymentService {

	@Autowired
	SampathPaymentRepository paymentRepository;
	


	//add payment
	@Override
	public void saveOrUpdateExpense(sampathpayment s) {
		paymentRepository.save(s);
	}
}
