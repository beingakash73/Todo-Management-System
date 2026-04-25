import { createContext, useContext,useState} from "react";
import { BasicAuthService } from "../API/TodosAPI";
import { APPIClient } from "../API/APIclient";



export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {

    const [isAuthenticated,setIsAuthenticated] = useState(false);

    const [Token,setToken] = useState(null);
    const [username,setusername] = useState("Deogiri");

    
// function Login(Username,Password){
    
//         if(Username ===  Username  && Password === "dummy"){
//             setIsAuthenticated(true);
//            return true;
           
//         }else{
//             setIsAuthenticated(false);
//                return false;      
//         }   
//     } 
    async function Login(Username,Password){
        
        const baToken = 'Basic ' + window.btoa(Username + ":" + Password)
    try{
        const response = await BasicAuthService(baToken)     
   
       if(response.status === 200){
           setIsAuthenticated(true);
           setusername(`${username}`)
           setToken(baToken);
            
           APPIClient.interceptors.request.use((config) => {
            console.log('intercepting and adding a token') 
            config.headers.Authorization =baToken
            return config
           }
        )
          return true;    
       }else{
        Logout()
              return false;      
       }  
    }
    catch(error){
        Logout()
        return false; 
    } 
}
function Logout(){
        setIsAuthenticated(false);
        setToken(null);
    }
   
    function id(){
        setIsAuthenticated(false);
    }
    
    return (
        <AuthContext.Provider value={{isAuthenticated,Login,Token,Logout,id,username}}>
            {children}
        </AuthContext.Provider>
    );
}

 