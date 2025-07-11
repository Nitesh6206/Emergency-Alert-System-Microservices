package com.nitesh.incident_service.Service;

import com.nitesh.incident_service.Model.Incident;
import com.nitesh.incident_service.Repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncidentService {
    @Autowired
    private IncidentRepository incidentRepository;
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public Incident createIncident(Incident incident) {
        Incident savedIncident = incidentRepository.save(incident);
//        kafkaTemplate.send("incident-reported-topic", "IncidentReported: " + savedIncident.getId());
        return savedIncident;
    }

    public List<Incident> getAllIncident(){
        return incidentRepository.findAll();
    }

    public Incident findById(Long id) {
        return incidentRepository.findById(id).orElseThrow(() -> new RuntimeException("Incident not found"));
    }
}
