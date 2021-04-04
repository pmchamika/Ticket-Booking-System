package com.IT17056212.DialogPayment.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.IT17056212.DialogPayment.model.roads;
import com.IT17056212.DialogPayment.model.dialogpayment;

public interface DialogPaymentRepository extends MongoRepository<dialogpayment, String> {

	
}
