import { useEffect, useState } from "react";
import { RetrieveAllUsers,DeleteTodosById } from "./API/TodosAPI";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./Security/AuthContext";
function ListTodoComponent(){ 

   // const today = new Date();

   // const TargetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());
    const [todos, setTodos] = useState([]);

    const [Message, setMessage] = useState(null);

    const AuthContext = useAuth();
     const { username } = useParams();

    const id = AuthContext.id
   // const username = AuthContext.username

   // const username = AuthContext.username

    const navigate = useNavigate();

useEffect(() =>   retrieveAllTodos(),[])  

      
   // const todos = [
        //{id:1, description: "Learn React", Done: false,TargetDate:TargetDate},
        //{id:2, description: "Learn Spring Boot", Done: false,TargetDate:TargetDate},
        //{id:3, description: "Learn AWS", Done: false,TargetDate:TargetDate},
        //{id:4, description: "Learn DevOps", Done: false,TargetDate:TargetDate},
   // ]

function deleteTodo(id){
    console.log("Delete Todo " + id);
    DeleteTodosById(id)
                    .then(() => {setMessage(`Todo deleted successfully`); retrieveAllTodos(); })
                    .catch(error => console.log(error));
   }
 
function UpdateTodo(id,username){
    console.log("Update Todo "+ id);
    navigate(`/User/todos/${id}`) 
   }

function AddNewTodo(){
    console.log("Add New Todo ");
    navigate(`/User/todos/-1`) 
   }
   
function retrieveAllTodos(){
   RetrieveAllUsers(username,id)
            .then((response) => { setTodos(response.data); console.table(response.data);})
            .catch(error => console.log(error));           
}
 return(
     <div className='container text-center'>
          
          {Message && <div className='alert alert-warning'>{Message}</div>} 
       
           <table className='table'>
                    <thead>
                            <tr>
                                <td className="fs-5 fw-bold text-black">Description</td>
                                <td className="fs-5 fw-bold text-black">Status</td>
                                <td className="fs-5 fw-bold text-black">Date</td>
                                <td className="fs-5 fw-bold text-black">Delete</td>
                                <td className="fs-5 fw-bold text-black">Update</td>    
                            </tr>  
                    </thead>
                    <tbody>
                            {
                                todos.map(todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.Done ? 'true' : 'false'}</td>
                                        <td>{todo.targetDate}</td>
                                        <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => UpdateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )

                            }
                    </tbody>
                
           </table>
           <div>
            <button className="btn btn-success m-5" onClick={() => AddNewTodo()}>Add New Todo</button>
           </div>
     </div>
)
}  
export default ListTodoComponent