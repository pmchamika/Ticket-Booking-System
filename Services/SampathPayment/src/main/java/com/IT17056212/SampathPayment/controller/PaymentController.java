package com.IT17056212.SampathPayment.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.IT17056212.SampathPayment.model.roads;
import com.IT17056212.SampathPayment.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/roads")
public class PaymentController {

	@Autowired
	PaymentService payment;
	
	
	
	//GET price by road 
	@GetMapping("/{road}")
	public ResponseEntity<?> getByroad(@PathVariable("road") String road) {
		List<roads> result = new ArrayList<>();
		
			result = payment.findByroad(road);			
			for (int i=0; i<result.size(); i++){
				   System.out.println(result.get(i).getPrice());
				   double p=result.get(i).getPrice();
				   roads.setFullprice(p);
				   System.out.println(roads.getFullprice());
				   
				}
		return new ResponseEntity(result, HttpStatus.OK);
	}

	
	@PostMapping
	public ResponseEntity<?> addorUpdateExpense(@RequestBody roads expense) {
		payment.saveOrUpdateExpense(expense);
		return new ResponseEntity("Payment Successfull", HttpStatus.OK);
	}
	
	
	

}
