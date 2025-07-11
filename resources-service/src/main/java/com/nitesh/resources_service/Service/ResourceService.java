package com.nitesh.resources_service.Service;

import com.nitesh.resources_service.Repository.ResourceRepository;
import com.nitesh.resources_service.model.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResourceService {
    @Autowired
    private ResourceRepository resourceRepository;

    public Resource createResource(Resource resource) {

        return resourceRepository.save(resource);
    }

    public Resource findById(String id) {
        return resourceRepository.findById(id).orElseThrow(() -> new RuntimeException("Resource not found"));
    }

    public List<Resource> getAllResources(){
        return resourceRepository.findAll();
    }
}