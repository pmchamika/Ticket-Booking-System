package com.IT17056212.DialogPayment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.IT17056212.DialogPayment.model.roads;
import com.IT17056212.DialogPayment.model.dialogpayment;
import com.IT17056212.DialogPayment.repositories.PaymentRepository;
import com.IT17056212.DialogPayment.repositories.DialogPaymentRepository;

@Service
public class DialogPaymentImpl implements DialogPaymentService {

	@Autowired
	DialogPaymentRepository paymentRepository;
	


	//add payment
	@Override
	public void saveOrUpdateExpense(dialogpayment s) {
		paymentRepository.save(s);
	}
}
