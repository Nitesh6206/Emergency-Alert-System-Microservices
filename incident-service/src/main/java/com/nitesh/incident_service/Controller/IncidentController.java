package com.nitesh.incident_service.Controller;

import com.nitesh.incident_service.Model.Incident;
import com.nitesh.incident_service.Service.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/incidents")
public class IncidentController {
    @Autowired
    private IncidentService incidentService;

    @PostMapping
    public ResponseEntity<Incident> createIncident(@RequestBody Incident incident) {
        return ResponseEntity.ok(incidentService.createIncident(incident));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Incident> getIncident(@PathVariable Long id) {
        return ResponseEntity.ok(incidentService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<Incident>> getAllIncident(){
        return new ResponseEntity<>(incidentService.getAllIncident(),HttpStatus.OK);
    }
}