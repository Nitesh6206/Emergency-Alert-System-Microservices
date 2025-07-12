package com.nitesh.resources_service.Repository;

import com.nitesh.resources_service.model.Resource;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepository extends MongoRepository<Resource,String> {
    List<Resource> findByTaskId(Long id);
}
