package com.nitesh.incident_service.Repository;

import com.nitesh.incident_service.Model.Incident;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncidentRepository extends JpaRepository<Incident, Long> {
}
