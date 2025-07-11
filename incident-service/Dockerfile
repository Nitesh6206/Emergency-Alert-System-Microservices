FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/incident-service-0.0.1-SNAPSHOT.jar incident-service.jar
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "incident-service.jar"]