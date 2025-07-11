package com.nitesh.user_service.Service;

import com.nitesh.user_service.Entity.User;
import com.nitesh.user_service.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<User> register(User user) {
        // Add password encoding and JWT generation logic here
        return new  ResponseEntity<> (userRepository.save(user), HttpStatus.CREATED);
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<User> getAllUser(){
        return userRepository.findAll();
    }
}
