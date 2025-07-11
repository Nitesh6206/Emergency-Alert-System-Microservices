package com.nitesh.analytics_service.Repository;

import com.nitesh.analytics_service.Model.AnalyticsReport;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnalyticsRepository extends MongoRepository<AnalyticsReport, String> {
}
