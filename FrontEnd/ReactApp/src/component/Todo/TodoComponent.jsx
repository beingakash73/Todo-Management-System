import { useParams,useNavigate } from "react-router-dom";
import { RetrieveAllUsers} from "./API/TodosAPI";
import { useEffect,useState} from "react";
import { useAuth } from "./Security/AuthContext";
import {RetrieveUser,UpdateTodoAPI,CreateTodo} from "./API/TodosAPI";
import { Formik,Form,Field,ErrorMessage} from 'formik';


function TodoComponent(){
    const {id} = useParams();
    const {username} = useParams();
   
    const navigate = useNavigate();

    useEffect(() => retrieveTodo,[id])

   const AuthContext = useAuth();
 

  const[description, setDescription] = useState('');
  
  const[Username, setUsername] = useState('');

  const[targetDate, setTargetDate] = useState('');
  

function retrieveTodo(){
    if(id != -1){ 
    RetrieveUser(id,username)
            .then(response => { 
                               setDescription(response.data.description) 
                               setTargetDate(response.data.targetDate )
                                console.log(response.data); 
                               })
            .catch(error => console.log(error));
    }
}

function onSubmit(values){
    console.log(values);
    const todo = {
        id:id,
        username:values.username,
        description:values.description,
        targetDate:values.targetDate,
        done: false
    }
    if(id == -1){
        CreateTodo(todo,username)
        .then(response =>{console.table(response.data);
                        navigate('/Todos')
         })
        .catch(error => console.log(error));
    }else{   
    UpdateTodoAPI(username,id,todo)
         .then(response =>{console.table(response.data);
         navigate('/Todos')
         })
        .catch(error => console.log(error));
        }
}



function validate(values){
    let errors = {}
    if(!values.description || values.description.length < 5){
        errors.description = 'Enter atleast 5 characters'
    }
    if(!values.targetDate || values.targetDate ===''){
        errors.targetDate = 'Enter a target date'
    }
    console.log(values);
    return errors;  
}   
    return(
        <div className="container">
            <h1>Update Todo!</h1>
             <div>
            <Formik
            initialValues={{description,targetDate}}
            enableReinitialize={true}
            onSubmit={onSubmit} 
            validate={validate}
            validateOnChange={false}
            validateOnBlur={false}>
                {
                    (props) => (    
                        <Form>
                            <ErrorMessage name = "description" component="div" className="alert alert-warning"/>

                            <ErrorMessage name = "targetDate" component="div" className="alert alert-warning"/>

                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className="form-control" type="date" name="targetDate"/>
                            </fieldset>
                            <button className="btn btn-success m-2" type="submit">Save</button>
                        </Form>
                    )
                }
            </Formik>

           </div> 
          
        </div>
    )
}
export default TodoComponent;