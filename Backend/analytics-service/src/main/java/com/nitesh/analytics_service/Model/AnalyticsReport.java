package com.nitesh.analytics_service.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reports")
public class AnalyticsReport {
    @Id
    private String id;
    private String reportType; // e.g., TASK_STATUS, INCIDENT_COUNT
    private String data; // JSON string or other format for report data

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getReportType() { return reportType; }
    public void setReportType(String reportType) { this.reportType = reportType; }
    public String getData() { return data; }
    public void setData(String data) { this.data = data; }
}
