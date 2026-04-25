import {useNavigate} from 'react-router-dom';
import {useState } from 'react';
import {useAuth} from './Security/AuthContext';

function LoginComponent(){

    const [Username, setUsername] = useState ("Deogiri");
    const [Password, setPassword] = useState ("dummy");
    const [ShowErrorMessage, setShowErrorMessage] = useState (false);

    const navigate = useNavigate();
    const AuthContext = useAuth()

function handleUserNameChange(event){
        setUsername(event.target.value);
    }
 
function handlePasswordChange(event){
        setPassword(event.target.value);
    }

 async function handleSubmit(){
        if(await AuthContext.Login(Username,Password)){
            navigate(`/welcome/${Username}`);
        }else{
            setShowErrorMessage(true);       
        }   
    } 
    return (
     <div className="Login">
         <h1>Welcome to Login Page</h1>
        {ShowErrorMessage && <div className="ErrorMessage">Authentication Failed. Please check your credentials.</div>}
        <div className="LoginForm">
            <div>
                <label>UserName</label>
                <input type = "text" name = "username" value = {`${Username}`} onChange={handleUserNameChange} />
            </div>
             <div>
                <label>Password</label>
                <input type = "Password" name = "password" value = {Password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type = "button" name="Login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
     </div>
)
} 
export default LoginComponent
