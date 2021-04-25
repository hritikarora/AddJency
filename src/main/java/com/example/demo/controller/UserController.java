package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	// get all users
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}		
	
	// create user rest api
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		System.out.println(user);
		System.out.println(user.getFirstName());
		System.out.println(user.getLastName());
		System.out.println(user.getEmailId());
		return userRepository.saveAndFlush(user);
	}
	
	// get employee by id rest api
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(user);
	}
	
	// update employee rest api
	
	// @PutMapping("/employees/{id}")
	// public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
	// 	Employee employee = employeeRepository.findById(id)
	// 			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
	// 	employee.setFirstName(employeeDetails.getFirstName());
	// 	employee.setLastName(employeeDetails.getLastName());
	// 	employee.setEmailId(employeeDetails.getEmailId());
		
	// 	Employee updatedEmployee = employeeRepository.save(employee);
	// 	return ResponseEntity.ok(updatedEmployee);
	// }
	
	// // delete employee rest api
	// @DeleteMapping("/employees/{id}")
	// public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
	// 	Employee employee = employeeRepository.findById(id)
	// 			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
	// 	employeeRepository.delete(employee);
	// 	Map<String, Boolean> response = new HashMap<>();
	// 	response.put("deleted", Boolean.TRUE);
	// 	return ResponseEntity.ok(response);
	// }
	
	
}