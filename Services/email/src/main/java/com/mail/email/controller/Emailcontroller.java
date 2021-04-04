package com.mail.email.controller;



import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mail.email.domain.Email;



@RestController
@RequestMapping(value = "/email")
@CrossOrigin(origins="*")
public class Emailcontroller {
	
	@Autowired
	public JavaMailSender javaMailSender;
	
	//recieve email (to,body,sub) & send email
	@RequestMapping(value = "/send",method=RequestMethod.POST)
	public ResponseEntity<?> addPayment(@RequestBody Email email) throws MessagingException{
		
		MimeMessage  mime=javaMailSender.createMimeMessage();
		MimeMessageHelper me= new MimeMessageHelper(mime,true);
		me.setTo(email.getTo());
		me.setSubject(email.getSub());
		me.setText(email.getBody(),true);
		
		javaMailSender.send(mime);
		System.out.println(email.getTo());
		return new ResponseEntity<>(null, HttpStatus.OK);
	}

}
