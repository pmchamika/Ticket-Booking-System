package com.IT17056212.DialogPayment.model;

import org.springframework.data.annotation.Id;

public class govermentnic {
	@Id
	String id;
	String nic;
	String status;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNic() {
		return nic;
	}
	public void setNic(String nic) {
		this.nic = nic;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public govermentnic(String id, String nic, String status) {
		
		this.id = id;
		this.nic = nic;
		this.status = status;
	}
	
	
	
}
