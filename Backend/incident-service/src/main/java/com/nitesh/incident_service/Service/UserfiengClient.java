package com.nitesh.incident_service.Service;



import com.nitesh.incident_service.Model.RequestMessage;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "user-service")
public interface UserfiengClient {

    @PostMapping("/api/users/send-mail")
    ResponseEntity<String> sendMail(@RequestBody RequestMessage message);
}
