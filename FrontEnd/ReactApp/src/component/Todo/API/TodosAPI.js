import { APPIClient } from "./APIclient";
 
    export const  RetrieveAllUsers = (username) =>  APPIClient.get(`/users/${username}/todos`)
 
    export const  DeleteTodosById = (id) =>  APPIClient.delete(`/users/todos/${id}`)

    export const  RetrieveUser = (id) =>  APPIClient.get(`/user/todo/${id}`)

    export const  UpdateTodoAPI = (username,id,todo) =>  APPIClient.put(`/users/${username}/todos/${id}`,todo)

    export const  CreateTodo = (todo,username) =>  APPIClient.post(`/users/${username}/todos`,todo)
    
       export const heloworld = (token) => APPIClient.get('/hello-world',{
        headers: {
             Authorization:token
        }
    })

     export const  BasicAuthService 
     = (token) =>  APPIClient.get(`/BasicAuth`,{
        headers: {
            Authorization:token
        }
    })

    


