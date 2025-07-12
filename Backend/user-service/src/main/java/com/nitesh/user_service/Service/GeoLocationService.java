package com.nitesh.user_service.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Service
public class GeoLocationService {

    private final RestTemplate restTemplate = new RestTemplate();

    public String getLocation(String ip) {
        String url = "http://ip-api.com/json/" + ip;
        Map<String, Object> response = restTemplate.getForObject(url, Map.class);
        return response != null ? response.get("city") + ", " + response.get("country") : "Unknown";
    }
}

