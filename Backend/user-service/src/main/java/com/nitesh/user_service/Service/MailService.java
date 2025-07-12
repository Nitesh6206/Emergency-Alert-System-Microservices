package com.nitesh.user_service.Service;

import com.nitesh.user_service.Entity.RequestMessage;
import com.nitesh.user_service.Entity.User;
import com.nitesh.user_service.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private UserRepository userRepository;

    @Value("${sendemail}")
    private String senderEmail;

    public void sendEmail(String email,String subject,String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(senderEmail);
        message.setTo(email);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }

    public void  sendNotification(RequestMessage requestMessage){
        String location=requestMessage.getLocation();
        List<User> users=userRepository.findAll();
        for(User user:users){
            sendEmail(user.getEmail(),requestMessage.getSubject(),requestMessage.getBody());
        }

    }
}

