FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/resource-service-0.0.1-SNAPSHOT.jar resource-service.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "resource-service.jar"]