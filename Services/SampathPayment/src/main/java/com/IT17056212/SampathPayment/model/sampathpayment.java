package com.IT17056212.SampathPayment.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class sampathpayment {
	@Id
	String id;
	String road;
	Integer amount;
	Integer card;
	double discount;
	double price=roads.getFullprice();
	
	
	
	public double getDiscount() {
		return discount;
	}		
	public void setDiscount(double discount) {
		this.discount = discount;
		System.out.println("full "+roads.getFullprice());
		  System.out.println("discount "+this.discount);
	}
	public Integer getCard() {
		return card;
	}
	public void setCard(Integer card) {
		this.card = card;
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
		System.out.println(price);
		this.price = price;
		
		System.out.println(price);
		
	}


}
