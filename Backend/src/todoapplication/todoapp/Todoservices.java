package com.todoAPI.TodoApplication.todoapp;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class Todoservices {
	
	private static List<todos> todoslist = new ArrayList<>();
	
	private static int todosCount = 0;
	
	static {
		todoslist.add(new todos(++todosCount, "Deogiri","Get AWS Certified", LocalDate.now().plusYears(10), false ));
							
		todoslist.add(new todos(++todosCount, "Deogiri","Learn DevOps",LocalDate.now().plusYears(11), false )); 
				
		todoslist.add(new todos(++todosCount, "Deogiri","Doker & Kubernate ",LocalDate.now().plusYears(11), false )); 
		
		todoslist.add(new todos(++todosCount, "Deogiri","Learn to Dance", LocalDate.now().plusYears(12), false ));
				
		todoslist.add(new todos(++todosCount, "Deogiri","Learn Web development", LocalDate.now().plusYears(12), false ));
	
		todoslist.add(new todos(++todosCount, "Deogiri","Learn Developer Tools", LocalDate.now().plusYears(12), false ));

	}
	
//	// Add to Todoservices class
//	public List<todos> findAllTodos() {
//	    return new ArrayList<>(todoslist);  // Returns ALL todos from list
//	}

	
	public List<todos> findByUsername(String username){
		Predicate<? super todos> predicate = 
				todo -> todo.getUsername().equalsIgnoreCase(username);
		return todoslist.stream().filter(predicate).toList();
	}
	
	public todos addTodo( String description, LocalDate targetDate, boolean done) {
		
		todos todo = new todos(++todosCount,description,description, targetDate,done);
		
		todoslist.add(todo);
		return todo;
	}
	
	public void deleteById(int id) {
		Predicate<? super todos> predicate = todo -> todo.getId() == id;
		todoslist.removeIf(predicate);
	}

	public todos findById(int id) {
		Predicate<? super todos> predicate = todo -> todo.getId() == id;
		todos todo = todoslist.stream().filter(predicate).findFirst().get();
		return todo;
	}

	public void updateTodo(todos todo) {
		deleteById(todo.getId());
		todoslist.add(todo);
	}
}



