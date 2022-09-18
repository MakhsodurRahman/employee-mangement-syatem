package com.ems.controller;

import com.ems.entity.Employee;
import com.ems.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping("employees")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }
    @PostMapping("employees")
    public void addEmployee(@RequestBody Employee employee){
        employeeRepository.save(employee);
    }
}
