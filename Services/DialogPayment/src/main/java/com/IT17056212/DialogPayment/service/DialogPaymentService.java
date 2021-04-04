package com.IT17056212.DialogPayment.service;

import com.IT17056212.DialogPayment.model.roads;
import com.IT17056212.DialogPayment.model.dialogpayment;

public interface DialogPaymentService {
	
	//add payment
	void saveOrUpdateExpense(dialogpayment payment);
}
