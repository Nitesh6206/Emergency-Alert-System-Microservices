package com.nitesh.user_service.Entity;


import lombok.Data;

@Data
public class Task {
    private  String title;
    private  String description;
    private  String status;
    private  String location;
}
