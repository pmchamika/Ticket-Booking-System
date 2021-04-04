package com.IT17056212.DialogPayment.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.IT17056212.DialogPayment.model.govermentnic;
import com.IT17056212.DialogPayment.model.roads;
import com.IT17056212.DialogPayment.model.dialogpayment;
import com.IT17056212.DialogPayment.service.NicService;
import com.IT17056212.DialogPayment.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/govermentnic")
public class NicController {

	@Autowired
	NicService nicservice;
	
	
	
	//GET by nic if to check whether it's a goverment nic
	@GetMapping("/{govermentnic}")
	public ResponseEntity<?> getBynic(@PathVariable("govermentnic") String nic) {
		List<govermentnic> result = new ArrayList<>();
		dialogpayment n=new dialogpayment();
			result = nicservice.findBynic(nic);			
			for (int i=0; i<result.size(); i++){
				   System.out.println(result.get(i).getStatus());
				   String p=result.get(i).getStatus();
				   if(p.equalsIgnoreCase("yes")) {
					   n.setDiscount((0.9*roads.getFullprice()));
				   }else {
					   n.setDiscount((2*roads.getFullprice()));
				   }
				 
				   
				}
		return new ResponseEntity(result, HttpStatus.OK);
	}
	
}
