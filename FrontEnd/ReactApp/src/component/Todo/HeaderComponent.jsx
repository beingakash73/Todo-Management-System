import {Link} from 'react-router-dom';
import {useAuth} from './Security/AuthContext';

function HeaderComponent(){
    const AuthContext = useAuth()
    const isAuthentication = AuthContext.isAuthenticated;
    console.log(AuthContext);
    
    function Logout(){
        AuthContext.Logout();
    }
    
 return(
        <header className="border-bottom border-dark border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://deogiricollege.org/">DeogiriCollege</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">{isAuthentication && <Link className="nav-link" to="/welcome/:Username">Home</Link>}</li>
                                <li className="nav-item fs-5">{isAuthentication && <Link className="nav-link" to="/todos">Todos</Link>}</li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">{!isAuthentication && <Link className="nav-link" to="/login">Login</Link>}</li>
                            <li className="nav-item fs-5">{isAuthentication && <Link className="nav-link" to="/logout"onClick={Logout}>Logout</Link>}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

)
} 
export default HeaderComponent;