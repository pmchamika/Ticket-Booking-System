package com.IT17056212.SampathPayment.service;

import java.util.List;

import com.IT17056212.SampathPayment.model.roads;


public interface PaymentService {
	
	//find by road
	List<roads> findByroad(String road);
	
	//add payment
	void saveOrUpdateExpense(roads payment);
	
	

}
