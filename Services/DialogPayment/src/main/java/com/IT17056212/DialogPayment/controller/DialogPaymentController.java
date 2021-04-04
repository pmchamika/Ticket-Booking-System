package com.IT17056212.DialogPayment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.IT17056212.DialogPayment.model.roads;
import com.IT17056212.DialogPayment.model.dialogpayment;
import com.IT17056212.DialogPayment.service.PaymentService;
import com.IT17056212.DialogPayment.service.DialogPaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/dialogpayment")
public class DialogPaymentController {


	@Autowired
	DialogPaymentService payment;
	
	//add payment
	@PostMapping
	public ResponseEntity<?> addorUpdateExpense(@RequestBody dialogpayment s) {
		payment.saveOrUpdateExpense(s);
		return new ResponseEntity("Dialog Payment Successfull", HttpStatus.OK);
	}
	
}
