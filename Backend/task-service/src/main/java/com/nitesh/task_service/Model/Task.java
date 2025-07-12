package com.nitesh.task_service.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String status; // e.g., OPEN, ASSIGNED, COMPLETED
    private Long assignedUserId;
    @Transient
    private List<Resources> resources=new ArrayList<>();
    private String location; // e.g., "lat:51.505,lng:-0.09"


}
