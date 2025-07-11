package com.nitesh.task_service.Service;

import com.nitesh.task_service.Model.Task;
import com.nitesh.task_service.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public Task createTask(Task task) {
        Task savedTask = taskRepository.save(task);
//        kafkaTemplate.send("task-created-topic", "TaskCreated: " + savedTask.getId());
        return savedTask;
    }

    public Task findById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
    }

    public ResponseEntity<List<Task>> getAllTasksDetails() {
        List<Task> taskList=taskRepository.findAll();
        return  ResponseEntity.ok(taskList);
    }
}
