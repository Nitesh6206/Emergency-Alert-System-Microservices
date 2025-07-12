package com.nitesh.incident_service.Model;

import lombok.Data;

// in incident-service
@Data
public class RequestMessage {
    private String subject;
    private String body;
    private String location;

    // Getters and Setters
}

