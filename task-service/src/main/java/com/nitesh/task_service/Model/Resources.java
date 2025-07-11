package com.nitesh.task_service.Model;


import lombok.Data;

@Data
public class Resources {
    private String name;
    private String type; // e.g., FOOD, MEDICAL, SHELTER
    private int quantity;

}
