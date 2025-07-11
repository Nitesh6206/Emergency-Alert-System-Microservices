package com.nitesh.analytics_service.Service;


import com.nitesh.analytics_service.Model.AnalyticsReport;
import com.nitesh.analytics_service.Repository.AnalyticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnalyticsService {
    @Autowired
    private AnalyticsRepository analyticsRepository;

    public AnalyticsReport createReport(AnalyticsReport report) {
        return analyticsRepository.save(report);
    }

    public AnalyticsReport findById(String id) {
        return analyticsRepository.findById(id).orElseThrow(() -> new RuntimeException("Report not found"));
    }

    public List<AnalyticsReport> findAllReports() {
        return  analyticsRepository.findAll();
    }
}