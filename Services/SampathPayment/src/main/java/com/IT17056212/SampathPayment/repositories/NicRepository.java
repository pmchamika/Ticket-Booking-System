package com.IT17056212.SampathPayment.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.IT17056212.SampathPayment.model.govermentnic;


public interface NicRepository extends MongoRepository<govermentnic, String> {
	
	//find by nic
	List<govermentnic> findBynic(String nic);
}
