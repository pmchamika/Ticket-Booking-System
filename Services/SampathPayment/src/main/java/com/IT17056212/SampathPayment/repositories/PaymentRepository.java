package com.IT17056212.SampathPayment.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.IT17056212.SampathPayment.model.roads;

public interface PaymentRepository extends MongoRepository<roads, String> {

	//find by road
	List<roads> findByroad(String road);
	
}
