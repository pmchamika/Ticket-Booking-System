package com.IT17056212.SampathPayment.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.IT17056212.SampathPayment.model.roads;
import com.IT17056212.SampathPayment.model.sampathpayment;

public interface SampathPaymentRepository extends MongoRepository<sampathpayment, String> {

	
}
