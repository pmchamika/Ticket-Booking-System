package com.IT17056212.SampathPayment.service;

import com.IT17056212.SampathPayment.model.roads;
import com.IT17056212.SampathPayment.model.sampathpayment;

public interface SampathPaymentService {
	
	//add payment
	void saveOrUpdateExpense(sampathpayment payment);
}
