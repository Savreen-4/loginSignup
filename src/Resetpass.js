import React, { useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import {API_URL} from "./Api";
import axios from 'axios';
function Resetpass (props){
    // const history = useHistory();
    const [resetpass,setResetpass] = useState({
        temppassword:"",
        newpassword:"",
        cnfrmpass: ''
    });
    
   let tok = localStorage.getItem('token');
   let email= localStorage.getItem('email');

    const handleSubmit =()=>{
        alert("RESET IT")
        axios.post(API_URL + `/password/resetpassword`, resetpass, {
            headers: {
           accesstoken : tok,
           email: email
             }
         })  
         .then(res=>{
             console.log(res);
         })
        console.log(resetpass);
        if (resetpass.Password === resetpass.Confirm) {
            props.history.push("/Login");
          } else {
            alert("Password didn't match");
          }
            }
    return(
        <div>
            <h1>Resetpass</h1>
            <label>tempass</label>
            <input type="text" value={resetpass.temppassword} onChange={(e)=>setResetpass({...resetpass, temppassword:e.target.value})} placeholder="temporary password"></input><br/>
            <label>newpass</label>
            <input type="password" value={resetpass.newpassword} onChange={(e)=>setResetpass({...resetpass, newpassword:e.target.value})} placeholder="New password"></input><br/>
            <label>cnfrmpassword</label>
            <input type="password" value={resetpass.cnfrmpass} onChange={(e)=>setResetpass({...resetpass, cnfrmpass:e.target.value})} placeholder="confirm password"></input><br/>
            <Link to ={"./"}><button onClick={handleSubmit}>Submit</button></Link>
        </div>
    )
}
export default Resetpass;