package com.IT17056212.SampathPayment.service;

import java.util.List;

import com.IT17056212.SampathPayment.model.govermentnic;

public interface NicService {
	
	//find by nic
	List<govermentnic> findBynic(String nic);
}
