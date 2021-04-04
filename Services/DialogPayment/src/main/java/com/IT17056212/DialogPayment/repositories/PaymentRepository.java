package com.IT17056212.DialogPayment.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.IT17056212.DialogPayment.model.roads;

public interface PaymentRepository extends MongoRepository<roads, String> {

	//find by road
	List<roads> findByroad(String road);
	
}
