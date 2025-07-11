package com.nitesh.alert_service.Service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class AlertService {

//    @KafkaListener(topics = "task-created-topic", groupId = "alert-service-group")
    public void listenTaskCreated(String message) {
        System.out.println("Received TaskCreated event: " + message);
        // Implement notification logic (e.g., send email/SMS to assigned user)
    }
}
