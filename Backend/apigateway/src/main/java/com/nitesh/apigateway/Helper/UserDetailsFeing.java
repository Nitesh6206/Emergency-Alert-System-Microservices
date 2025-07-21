package com.nitesh.apigateway.Helper;

import com.nitesh.apigateway.Dto.AuthRequest;
import com.nitesh.apigateway.Dto.UserDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "user-service")
public interface UserDetailsFeing {
    @GetMapping("/api/users/username/{username}")
    UserDto findUserDetails(@PathVariable("username") String username);

    @PostMapping("/api/users/register")
    ResponseEntity<String> registerUser(@RequestBody UserDto userDto);

    @PostMapping("/api/users/authenticate")
    ResponseEntity<UserDto> authenticateUser(@RequestBody AuthRequest authRequest);
}