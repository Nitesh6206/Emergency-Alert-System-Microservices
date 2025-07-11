# 🌍 Disaster Management Microservices System

This is a microservices-based Disaster Management platform designed to efficiently handle various aspects of emergency and disaster scenarios, such as resource allocation, task management, user handling, alert broadcasting, incident tracking, and analytical reporting.

---

## 🛠️ Tech Stack

- **Java 17**
- **Spring Boot**
- **Spring Cloud (Eureka, Config, Gateway)**
- **MongoDB** and **PostgreSQL**
- **Docker & Docker Compose**
- **Maven**
- **REST APIs**
- **Microservice Architecture**

---

## 📦 Microservices Overview

| Service Name       | Description                                           |
|--------------------|-------------------------------------------------------|
| `user-service`     | Manages user registration, login, roles & authentication. |
| `incident-service` | Tracks incidents such as disasters and emergencies.     |
| `alert-service`    | Broadcasts alerts/notifications related to incidents.  |
| `task-service`     | Assigns and manages disaster-related tasks.            |
| `resources-service`| Manages the resources (equipment, personnel, etc).     |
| `analytics-service`| Generates analytical reports from incident data.       |
| `config-server`    | Centralized configuration service for all services.    |
| `service-discovery`| Eureka server for service registration/discovery.      |
| `apigateway`       | Acts as a unified entry point for all services.        |

---

## 📁 Project Structure
<img width="341" height="389" alt="Screenshot 2025-07-11 at 11 51 43 AM" src="https://github.com/user-attachments/assets/9ec7ff49-8155-4f09-aa20-554273f91f40" />



yaml
Copy
Edit

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Nitesh6206/Disaster-Managment-MicroServices.git
cd Disaster-Managment-MicroServices
2. Run with Docker Compose
bash
Copy
Edit
docker-compose up --build
Make sure Docker is installed and running.

📄 Configuration
All service configurations are located in config-repo/

The application.yml in each microservice contains its Spring Boot settings.

MongoDB is used by analytics-service, PostgreSQL is used by user-service and others as needed.

✅ Features
📡 Real-Time Alert Broadcasting

👥 User & Role Management

📊 Incident Logging & Reporting

🧠 Data Analytics and Insights

🧰 Resource Allocation & Tracking

📌 Task Assignment and Monitoring

🌐 API Gateway with Routing

🛠️ Centralized Config Server

🔎 Service Discovery with Eureka

👨‍💻 Author
Nitesh Kumar
GitHub Profile
LinkedIn

