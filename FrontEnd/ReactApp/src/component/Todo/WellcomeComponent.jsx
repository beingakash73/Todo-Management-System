import {useParams,Link} from 'react-router-dom';
import { useState } from 'react';

function WellcomeComponent(){
    const {Username} = useParams()
    console.log(Username);
    const [Message,setMessage]= useState(null);

 return(
     <div className="Wellcome">
         <h1>Welcome to the Todo Application {Username}</h1>
         <div>
            Manage your todos<Link to = "/Todos">Go here</Link>
         </div>
         <div className='text-info'>{Message}</div>
     </div>
)
}
export default WellcomeComponent;   