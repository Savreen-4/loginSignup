import axios from 'axios';
import {API_URL} from "./Api";
import {Link,useHistory} from "react-router-dom"
import React, { useState } from 'react';
function Forgetpass (){
    const history = useHistory();
    const [forgetpass, setForgetpass] = useState({
        email: "",
    });
    const url = API_URL + `/password/forgotpassword`;

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(url, {
            email: forgetpass.email,
        })
        .then(res=>{
            if (res.status==200)
            {
                console.log(res);
                localStorage.setItem('token', res['data'].accesstoken);
                localStorage.setItem('email', res['data'].email)
                let path = "/Resetpass";
                history.push(path);
            }
            console.log(res);
        })
    }
  
    return(
        <div>
            <h1>Forgetpass</h1>
            <label>Email: </label>
            <input type="mail" value={forgetpass.email} name="email" placeholder="Email" onChange={(e)=>setForgetpass({...forgetpass, email: e.target.value})} /><br/>
            <Link to ={"./Resetpass"}><button style={{backgroundColor:"#0099FF"}} onClick={handleSubmit}>Resetpass</button></Link>  
            
        </div>
    )
}
export default Forgetpass;