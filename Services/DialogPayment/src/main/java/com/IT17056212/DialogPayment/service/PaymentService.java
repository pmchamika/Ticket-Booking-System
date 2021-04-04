package com.IT17056212.DialogPayment.service;

import java.util.List;

import com.IT17056212.DialogPayment.model.roads;


public interface PaymentService {
	
	//find by road
	List<roads> findByroad(String road);
	
	//add payment
	void saveOrUpdateExpense(roads payment);
	
	

}
