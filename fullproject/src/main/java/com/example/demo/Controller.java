package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class Controller {
	@Autowired
	repo servicerepository;
	
	@Autowired
	service service;
	
	@GetMapping("/get")
	List<Reports> getList(){
		return servicerepository.findAll();
	}
	
	@GetMapping("/getvalues/{id}")
	public Optional<Reports> getByid(@PathVariable int id){
		return service.getTasks(id);
	}
	@PostMapping("/post")
	public Reports create(@RequestBody Reports d) {
		return servicerepository.save(d);
	}
	
	
	@PutMapping("/update")
	public String update(@RequestBody Reports d) {
		return service.updateTodo(d);
	}
	
	@DeleteMapping("/delete")
	public String delete(@RequestParam int id) {
		return service.deleteTodo(id);
	}
	
}
