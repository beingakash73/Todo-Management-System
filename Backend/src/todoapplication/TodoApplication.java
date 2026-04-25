//package com.todoAPI.TodoApplication;
//
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@SpringBootApplication
//public class TodoApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(TodoApplication.class, args);
//	}
//
//
//
//@Bean
//public WebMvcConfigurer corsConfigurer() {
//	
//return new WebMvcConfigurer() {
//	public void addCorsMappings(CorsRegistry registry) {
//		registry.addMapping("/**")
//		 .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//				.allowedOrigins("http://localhost:3000");
//		    			    
//      	      }
//          };
//       }  	
//    }
//
package com.todoAPI.TodoApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
  
@SpringBootApplication
public class TodoApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
    }

    @Bean  // ✅ INSIDE the class
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")     // ✅ Add this line
                        .allowCredentials(true); // ✅ Add this for JWT auth tokens
            }
        };
    }

} // ✅ Class closes here — AFTER the @Bean method