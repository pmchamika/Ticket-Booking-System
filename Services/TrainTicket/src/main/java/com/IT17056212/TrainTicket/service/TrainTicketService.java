package com.IT17056212.TrainTicket.service;

import java.util.List;

import com.IT17056212.TrainTicket.model.Ticket;

public interface TrainTicketService {
	
	//find all 
	List<Ticket> findAll();
	
	//find by day and month
	List<Ticket> findBydayAndMon(String day, String mon);
	
	//find by month
	List<Ticket> findBymon(String mon);
	
	//add ticket
	void saveOrUpdateExpense(Ticket ticket);
	
}
