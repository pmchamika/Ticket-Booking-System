package com.IT17056212.SampathPayment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.IT17056212.SampathPayment.model.roads;
import com.IT17056212.SampathPayment.model.sampathpayment;
import com.IT17056212.SampathPayment.service.PaymentService;
import com.IT17056212.SampathPayment.service.SampathPaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/sampathpayment")
public class SampathPaymentController {


	@Autowired
	SampathPaymentService payment;
	
	//Add payment
	@PostMapping
	public ResponseEntity<?> addorUpdateExpense(@RequestBody sampathpayment s) {
		payment.saveOrUpdateExpense(s);
		return new ResponseEntity("Payment Successfull", HttpStatus.OK);
	}
	
}
