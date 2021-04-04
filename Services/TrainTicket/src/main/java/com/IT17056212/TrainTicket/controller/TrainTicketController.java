package com.IT17056212.TrainTicket.controller;

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

import com.IT17056212.TrainTicket.model.Ticket;
import com.IT17056212.TrainTicket.service.TrainTicketService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ticket")
public class TrainTicketController {

	@Autowired
	TrainTicketService trainticketservice;
	
	//GET all
	@GetMapping
	public ResponseEntity<?> getAll() {
		List<Ticket> result = trainticketservice.findAll();
		return new ResponseEntity(result, HttpStatus.OK);
	}
	
	//GET by year and month
	@GetMapping("/{year}/{month}")
	public ResponseEntity<?> getBydaymon(@PathVariable("mon") String mon, @PathVariable("day") String day) {
		List<Ticket> result = new ArrayList<>();
		if("All".equals(day)) {
			result = trainticketservice.findBymon(mon);
		} else {
			result = trainticketservice.findBydayAndMon(day, mon);			
		}
		return new ResponseEntity(result, HttpStatus.OK);
	}
	
	//Add Ticket details
	@PostMapping
	public ResponseEntity<?> addorUpdateExpense(@RequestBody Ticket expense) {
		trainticketservice.saveOrUpdateExpense(expense);
		return new ResponseEntity("Ticket Booked succcessfully", HttpStatus.OK);
	}
	

}
