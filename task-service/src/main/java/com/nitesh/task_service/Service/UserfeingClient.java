package com.nitesh.task_service.Service;


import com.nitesh.task_service.Model.User;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient("user-service")
public interface UserfeingClient {

    @GetMapping("/api/users/{id}")
    public List<User> getUser(@PathVariable Long id);
}
