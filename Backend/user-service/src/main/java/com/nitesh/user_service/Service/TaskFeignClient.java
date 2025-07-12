package com.nitesh.user_service.Service;


import com.nitesh.user_service.Entity.Task;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@FeignClient(name="task-service")
public interface TaskFeignClient {

    @GetMapping("/api/tasks/user/{userId}")
    List<Task> findByUserId(@PathVariable("userId") Long userId);
}

