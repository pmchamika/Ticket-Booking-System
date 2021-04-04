package com.IT17056212.DialogPayment.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.IT17056212.DialogPayment.model.govermentnic;


public interface NicRepository extends MongoRepository<govermentnic, String> {
	
	//find by nic
	List<govermentnic> findBynic(String nic);
}
