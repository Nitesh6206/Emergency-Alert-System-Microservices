package com.nitesh.user_service.Entity;

import jakarta.persistence.*;


@Entity
@Table(name="user-details")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String password;
    private String role;
}
