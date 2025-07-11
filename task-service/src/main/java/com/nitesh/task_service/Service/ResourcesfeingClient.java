package com.nitesh.task_service.Service;


import com.nitesh.task_service.Model.Resources;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient("resource-service")
public interface ResourcesfeingClient {

    @GetMapping("/api/resources/bytask/{id}")
    List<Resources> getByTask(@PathVariable Long id);

}
