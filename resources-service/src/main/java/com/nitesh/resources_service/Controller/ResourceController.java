package com.nitesh.resources_service.Controller;

import com.nitesh.resources_service.Service.ResourceService;
import com.nitesh.resources_service.model.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {
    @Autowired
    private ResourceService resourceService;

    @PostMapping
    public ResponseEntity<Resource> createResource(@RequestBody Resource resource) {
        Resource res=resourceService.createResource(resource);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Resource> getResource(@PathVariable String id) {
        return ResponseEntity.ok(resourceService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<Resource>> getAllResouces(){
        return ResponseEntity.ok(resourceService.getAllResources());
    }
}