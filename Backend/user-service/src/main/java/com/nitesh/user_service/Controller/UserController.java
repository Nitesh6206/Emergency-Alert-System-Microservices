package com.nitesh.user_service.Controller;

import com.nitesh.user_service.Entity.RequestMessage;
import com.nitesh.user_service.Entity.User;
import com.nitesh.user_service.Service.MailService;
import com.nitesh.user_service.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private MailService mailService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        return userService.register(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @GetMapping
    public  ResponseEntity<List<User>> getAllUser(){
        List<User> users=userService.getAllUser();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }

    @PostMapping("/send-mail")
    public ResponseEntity<String> sendMail(@RequestBody RequestMessage request) {
        mailService.sendNotification(request);
        return ResponseEntity.ok("Email sent");
    }

}
