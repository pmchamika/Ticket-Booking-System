package com.IT17056212.TrainTicket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.IT17056212.TrainTicket.model.Ticket;
import com.IT17056212.TrainTicket.repositories.TrainTicketRepository;

@Service
public class TrainTicketImpl implements TrainTicketService {

	@Autowired
	TrainTicketRepository trainticketRepository;

	//find all
	@Override
	public List<Ticket> findAll() {
		return trainticketRepository.findAll();
	}

	//find by day and month
	@Override
	public List<Ticket> findBydayAndMon(String day, String mon) {
		return trainticketRepository.findBydayAndMon(day, mon);
	}

	//add ticket
	@Override
	public void saveOrUpdateExpense(Ticket ticket) {
		trainticketRepository.save(ticket);
	}

	//find by month
	@Override
	public List<Ticket> findBymon(String mon) {
		return trainticketRepository.findBymon(mon);
	}

}
