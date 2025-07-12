FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/alert-service-0.0.1-SNAPSHOT.jar alert-service.jar
EXPOSE 8084
ENTRYPOINT ["java", "-jar", "alert-service.jar"]