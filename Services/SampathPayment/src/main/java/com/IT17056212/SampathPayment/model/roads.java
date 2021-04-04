package com.IT17056212.SampathPayment.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class roads {
	
	
	@Id
	String id;
	String road;
	Integer amount;
	double price;
	static double fullprice;


	public roads(String id, String road, Integer amount, double price) {
		super();
		this.id = id;
		this.road = road;
		this.amount = amount;
		this.price = price;
		
	}
	
	public static double getFullprice() {
		return fullprice;
	}
	
	public static void setFullprice(double fullprice) {
		roads.fullprice = fullprice;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public String getRoad() {
		return road;
	}
	public void setRoad(String road) {
		this.road = road;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}


}
