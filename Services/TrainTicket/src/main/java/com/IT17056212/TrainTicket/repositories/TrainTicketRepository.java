package com.IT17056212.TrainTicket.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.IT17056212.TrainTicket.model.Ticket;

public interface TrainTicketRepository extends MongoRepository<Ticket, String>{

	//find by day and month
	List<Ticket> findBydayAndMon(String day, String mon);
	
	//find by month
	List<Ticket> findBymon(String mon);

}
