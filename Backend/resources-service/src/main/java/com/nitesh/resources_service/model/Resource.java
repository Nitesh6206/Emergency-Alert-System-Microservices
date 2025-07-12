package com.nitesh.resources_service.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "resources")
@Data
public class Resource {
    @Id
    private String id;
    private String name;
    private String type; // e.g., FOOD, MEDICAL, SHELTER
    private int quantity;
    private Long taskId;


}
