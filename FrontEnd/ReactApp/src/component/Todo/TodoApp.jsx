import './TodoApp.css';
//import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';
import WellcomeComponent from './WellcomeComponent';
import LoginComponent from './LoginComponent';
import ListTodoComponent from './ListTodoComponent';
import TodoComponent from './TodoComponent';
import AuthProvider, { useAuth }  from './Security/AuthContext';
import {BrowserRouter,Routes, Route, Navigate,} from 'react-router-dom';

function AuthenticatedRoute({ children }) {
    const AuthContext = useAuth();  

    if (AuthContext.isAuthenticated) 
        return children
               
    return <Navigate to="/" />
}
export default function TodoApp() {
return(
    <div className='TodoApp'>
         <AuthProvider>
        <BrowserRouter> 
           <HeaderComponent/>
            <Routes>
                <Route path = "/" element = {<LoginComponent/>} />
                <Route path = "/Login" element = {<LoginComponent/>} />
                
                <Route path = "/welcome/:Username" element = {
                    <AuthenticatedRoute>
                        <WellcomeComponent/>
                    </AuthenticatedRoute>
                    } />
                
                <Route path = "/Todos" element = {
                    <AuthenticatedRoute>
                        <ListTodoComponent/>
                    </AuthenticatedRoute>
                    } />

                 <Route path = "/User/todos/:id" element = {
                    <AuthenticatedRoute>
                        <TodoComponent/>
                    </AuthenticatedRoute>
                    } />    
                
                <Route path = "/Logout" element = {
                    <AuthenticatedRoute>
                        <LogoutComponent/>
                    </AuthenticatedRoute>
                    } />
                
                <Route path = "*" element = {<ErrorComponent/>} />
            </Routes>
           {/* <FooterComponent/> */}
        </BrowserRouter>
        </AuthProvider>  
    </div>
)
}