package com.todoAPI.TodoApplication.todoapp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.todoAPI.TodoApplication.todoapp.todos;


public interface TodoRepository extends JpaRepository <todos, Integer>{

	List<todos> findByUsername(String username);
	
	 
	
}



