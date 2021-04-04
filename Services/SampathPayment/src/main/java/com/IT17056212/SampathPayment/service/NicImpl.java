package com.IT17056212.SampathPayment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.IT17056212.SampathPayment.model.govermentnic;
import com.IT17056212.SampathPayment.repositories.NicRepository;


@Service
public class NicImpl implements NicService{

	@Autowired
	NicRepository nicrep;
	
	//find by nic
	@Override
	public List<govermentnic> findBynic(String nic) {
		
		return nicrep.findBynic(nic);
	}
}
