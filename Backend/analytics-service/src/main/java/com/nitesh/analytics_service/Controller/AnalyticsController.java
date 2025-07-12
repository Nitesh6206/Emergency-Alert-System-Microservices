package com.nitesh.analytics_service.Controller;

import com.nitesh.analytics_service.Model.AnalyticsReport;
import com.nitesh.analytics_service.Service.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {
    @Autowired
    private AnalyticsService analyticsService;

    @PostMapping
    public ResponseEntity<AnalyticsReport> createReport(@RequestBody AnalyticsReport report) {
        return ResponseEntity.ok(analyticsService.createReport(report));
    }

    @GetMapping("/{id}")
    public ResponseEntity<AnalyticsReport> getReport(@PathVariable String id) {
        return ResponseEntity.ok(analyticsService.findById(id));
    }
    @GetMapping
    public ResponseEntity<List<AnalyticsReport>> getAllReports() {
        return ResponseEntity.ok(analyticsService.findAllReports());
    }
}
