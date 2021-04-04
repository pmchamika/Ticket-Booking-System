package com.IT17056212.DialogPayment.service;

import java.util.List;

import com.IT17056212.DialogPayment.model.govermentnic;

public interface NicService {
	
	//find by nic
	List<govermentnic> findBynic(String nic);
}
