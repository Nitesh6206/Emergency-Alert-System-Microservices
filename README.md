# 🌍 Disaster Management System – Microservices Architecture

This project is a **Microservices-based Disaster Management System** built using **Spring Boot** and **Spring Cloud**. It provides a robust platform for managing users, tasks, and resource allocation during disaster scenarios, designed with scalability and reliability in mind.

---

## 🚀 Tech Stack

- **Java 17**: Core programming language  
- **Spring Boot**: Framework for building microservices  
- **Spring Cloud**:  
  - Eureka for service discovery  
  - Feign Client for inter-service communication  

- **Databases**:  
  - PostgreSQL for `task-service`  
  - MongoDB for `resource-service`  

- **Spring Data**:  
  - JPA for relational data  
  - MongoDB for NoSQL data  

- **Apache Kafka**: Planned for event-driven task notifications  
- **Docker**: Optional for containerization  
- **Maven**: Build tool  
- **Lombok**: Reduces boilerplate code  

---

## 🧩 Microservices Overview

| Service           | Port | Description                              |
|------------------|------|------------------------------------------|
| `eureka-server`  | 8761 | Service discovery and registry           |
| `user-service`   | 8081 | Manages user registration and profiles   |
| `task-service`   | 8083 | Handles disaster-related tasks           |
| `resource-service` | 8082 | Manages resource allocation for tasks   |

---

## 📌 Features

- ✅ **User Management**: Register and retrieve user information (`user-service`)  
- ✅ **Task Management**: Create, assign, and fetch tasks by user (`task-service`)  
- ✅ **Resource Management**: Allocate and retrieve resources for tasks (`resource-service`)  
- ✅ **Inter-Service Communication**: Feign Client  
- ✅ **Service Discovery**: Eureka
- ✅ **API GateWay**: API Gateway with Spring Cloud Gateway 

### 🛠 Planned Features

- 🔁 Event-driven task notifications using Kafka  
- 🌐 API Gateway with Spring Cloud Gateway  
- 🔐 Security with Spring Security and JWT  
- 🐳 Full containerization with Docker  

---

## 🔄 Architecture Diagram (Text Representation)

```
+------------------+       +------------------+
|   Eureka Server  |<----->|   User Service   |
|      (8761)      |       |      (8081)      |
+------------------+       +------------------+
         ^                        |
         |                        v
         |                 +------------------+
         +---------------->|   Task Service   |
         |                 |      (8083)      |
         |                 +------------------+
         |                        |
         |                        v
         |                 +------------------+
         +---------------->| Resource Service |
                           |      (8082)      |
                           +------------------+
                           |      MongoDB     |
                           +------------------+
         +------------------+
         |   PostgreSQL     |
         +------------------+
```

> 📌 *Note: View the actual diagram in the repo for a visual representation.*

---

## 📁 Project Structure

```
Disaster-Management-Microservices/
├── eureka-server/
│   ├── src/
│   └── pom.xml
├── user-service/
│   ├── src/
│   └── pom.xml
├── task-service/
│   ├── src/
│   └── pom.xml
├── resource-service/
│   ├── src/
│   └── pom.xml
├── config-repo/
│   ├── application.yml
│   └── <service-specific>.yml
├── docker-compose.yml
└── README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Java 17 or higher  
- Maven  
- PostgreSQL  
- MongoDB  
- Docker (optional)

---

### 🛠 Installation and Setup

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Nitesh6206/Disaster-Management-MicroServices.git
cd Disaster-Management-MicroServices
```

#### 2️⃣ Configure Databases

- Set up PostgreSQL and MongoDB instances.  
- Update your `application.yml` files in `config-repo/` with proper DB credentials.

#### 3️⃣ Build Project

```bash
mvn clean install
```

#### 4️⃣ Start Eureka Server

```bash
cd eureka-server
mvn spring-boot:run
```

#### 5️⃣ Start Each Service

In separate terminals:

```bash
cd user-service
mvn spring-boot:run

cd ../task-service
mvn spring-boot:run

cd ../resource-service
mvn spring-boot:run
```

---

### 🐳 Run with Docker (Partially Implemeted Comming Soon)

```bash
docker-compose up --build
```

> Ensure Docker is installed. This will spin up all services and databases.

---

## ⚙️ Configuration

All service configurations are in the `config-repo/` directory.

### Example: `task-service`

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/task_db
    username: postgres
    password: password
  jpa:
    hibernate:
      ddl-auto: update
```

### Example: `resource-service`

```yaml
spring:
  data:
    mongodb:
      uri: mongodb://localhost:27017/resource_db
```

---

## ✅ Additional Functionalities

- 🔔 **Real-Time Alerts** with Kafka (planned)  
- 👥 **User & Role Management**  
- 📒 **Incident Logging** via task-service  
- 🛠 **Resource Allocation & Tracking**  
- 👨‍💼 **Task Assignment & Monitoring**  
- 🔎 **Service Discovery with Eureka**  
- 🛠 **Centralized Configuration via config-repo**  

---

## 🐳 Docker Support

Docker support is partially implemented. A `docker-compose.yml` file is provided to spin up all services and databases. Full containerization including API Gateway is planned.

---

## 📅 Future Improvements

- Implement Apache Kafka  
- Add Spring Security with JWT  
- Enhance Monitoring with Actuator & Prometheus  
- Full Dockerization  

---

## 👨‍💻 Author

**Nitesh Kumar**  
[GitHub](https://github.com/Nitesh6206)  
[LinkedIn](https://linkedin.com/in/nitesh6206)  


