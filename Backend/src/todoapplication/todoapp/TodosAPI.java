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
//import org.springframework.web.bind.annotation.RestController;

//@RestController
public class TodosAPI {

    @Autowired
    private Todoservices todoService;  // FIXED: Inject SERVICE (Todoservices), not self (TodosAPI)

   // @GetMapping("/todos")
   // public List<todos> getAllTodos() {
    //    return todoService.findAllTodos();  // Dynamic - ALL todos, any username
   // }
        
    @GetMapping("/users/{username}/todos/{id}")
    public List<todos> getTodos(@PathVariable String username,int id ) {
        return todoService.findByUsername(username);  // FIXED: todoService
    }

    @GetMapping("/user/todo/{id}")
    public todos getTodo( @PathVariable Integer id) {
        return todoService.findById(id);  // FIXED: todoService
    }

    @PostMapping("/users/todos")
    public todos createTodo( @RequestBody todos todo) {
        todo.setId(0);  // Reset ID for new todo
        return todoService.addTodo(todo.getDescription(), 
                                   todo.getTargetDate(), 
                                   todo.isDone());  // FIXED: todoService
    }

    @PutMapping("/users/todos/{id}")
    public todos updateTodo(@PathVariable Integer id, @RequestBody todos todo) {
        todo.setId(id);  // Force ID from path
        todoService.updateTodo(todo);
        return todoService.findById(id);
    }

    @DeleteMapping("/users/todos/{id}")
    public void deleteTodo( @PathVariable Integer id) { 
        todoService.deleteById(id);  // FIXED: todoService
    }
}
