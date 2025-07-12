package com.nitesh.user_service.Entity;


import lombok.Data;

@Data
public class RequestMessage {
    private String to;
    private String subject;
    private String body;
    private  String location;
}
