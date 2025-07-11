# 🌍 Disaster Management System – Microservices Architecture

This project is a **Microservices-based Disaster Management System** developed using **Spring Boot**, **Spring Cloud**, and modern backend practices. It simulates a real-world platform to handle users, tasks, and resource allocation during disaster scenarios.

---

## 🚀 Tech Stack

- **Java 17**, **Spring Boot**
- **Spring Cloud (Eureka, Feign Client)**
- **PostgreSQL** for `task-service`
- **MongoDB** for `resource-service`
- **JPA**, **Spring Data MongoDB**
- **Kafka** (planned for task notifications)
- **Docker** (optional)
- **Maven**, **Lombok**

---

## 🧩 Microservices Overview

| Service           | Port | Description                                   |
|-------------------|------|-----------------------------------------------|
| `user-service`    | 8081 | Handles user registration and profile         |
| `resource-service`| 8082 | Manages resource allocation for tasks         |
| `task-service`    | 8083 | Manages disaster-related tasks and assignments|
| `eureka-server`   | 8761 | Service discovery and registry                |

---

## 📌 Features

- ✅ Register and fetch users (`user-service`)
- ✅ Assign tasks and fetch tasks by user (`task-service`)
- ✅ Allocate or fetch resources for a task (`resource-service`)
- ✅ Inter-service communication using **Feign**
- ✅ Service discovery using **Eureka**
- ❗ Kafka integration planned for event-driven notifications

---

## 🔄 Architecture Diagram



## 🔄 Architecture Diagram

<img width="573" height="392" alt="Screenshot 2025-07-11 at 3 03 06 PM" src="https://github.com/user-attachments/assets/7222553e-46f2-4f39-86d9-e48c9238a2eb" />

         


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


## 🐳 Docker Support (Optional)
Coming Soon...

## 📌 Future Improvements
 Add Kafka-based task notifications

 Add API gateway (Spring Cloud Gateway)

 Add security with Spring Security and JWT

 Containerize with Docker



👨‍💻 Author
Nitesh Kumar
GitHub Profile
LinkedIn

