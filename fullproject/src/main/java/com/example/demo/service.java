package com.example.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class service {
@Autowired
repo repository;

public Optional<Reports> getTasks(int id){
	return repository.findById( id);
}
public String updateTodo(Reports d) {
	repository.save( d);
	return "updated";
}
public String deleteTodo(int id) {
	repository.deleteById( id);
	return "ID DELETED";
}
}
