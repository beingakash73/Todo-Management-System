//package com.todoAPI.TodoApplication.todoapp;
//
//public class TodosAPI {
//
//}
package com.todoAPI.TodoApplication.todoapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todoAPI.TodoApplication.todoapp.Repository.TodoRepository;

@RestController
public class TodojpaResource {

    @Autowired
    private Todoservices todoServices;  // FIXED: Inject SERVICE (Todoservices), not self (TodosAPI)
    private TodoRepository todoRepository;
    
    public TodojpaResource(Todoservices todoServices,TodoRepository todoRepository) {
    	this.todoServices = todoServices;
    	this.todoRepository = todoRepository;
    }
    
//    @GetMapping("/todos")
//    public List<todos> getAllTodos() {
//        //return todoService.findAllTodos();
//    	return todoRepository.findAllTodos(); // Dynamic - ALL todos, any username
//    }
        
    @GetMapping(path ="/users/{username}/todos")
    public List<todos> getTodos(@PathVariable String username) {
//    	return todoService.findByUsername(username);  // FIXED: todoService
    	return todoRepository.findByUsername(username);
    }
    @GetMapping(path ="/user/todo/{id}")
    public todos getTodo( @PathVariable Integer id) {
       // return todoService.findById(id);
    	 return todoRepository.findById(id).get();// FIXED: todoService
    }

    @PostMapping(path ="/users/{username}/todos") 
    public todos createTodo(@PathVariable String username,@RequestBody todos todo) { 
    	todo.setUsername(username);
        todo.setId(null);
        todo.getDescription();
        todo.getTargetDate();
        todo.isDone();
        return todoRepository.save(todo);
        
        // Reset ID for new todo
 //       return todoService.addTodo(todo.getDescription(), 
   //                                todo.getTargetDate(), 
     //                              todo.isDone());  // FIXED: todoService
    }

   /* @PutMapping(path ="/users/{username}/todos/{id}")
    public todos updateTodo( @PathVariable String username ,@PathVariable Integer id  ,@RequestBody todos todo) {
        todo.setId(id);
        todo.setUsername(username);// Force ID from path
        //todoService.updateTodo(todo);
        todoRepository.save(todo);
        return todo; 
    }*/
    @PutMapping("/users/{username}/todos/{id}")
    public todos updateTodo(@PathVariable Integer id,
                            @PathVariable String username,
                            @RequestBody todos todo) {
        todo.setId(id);
        todo.setUsername(username);
        return todoRepository.save(todo);
    }
    
    
   /* @PutMapping("/users/todos/{id}")
    public todos updateTodo(@PathVariable Integer id, @RequestBody todos todo) {
        todo.setId(id);  // Force ID from path
        todoService.updateTodo(todo);
        return todoService.findById(id);
    }*/


    @DeleteMapping("/users/todos/{id}")
    public void deleteTodo( @PathVariable Integer id) { 
    	todoRepository.deleteById(id);  // FIXED: todoService
    }
    
 
}
