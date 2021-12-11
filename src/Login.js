import React,{ useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios';
import {API_URL} from "./Api";
function Login (){
    const history = useHistory();
    const url = API_URL + `/auth/login`;
    // " http://de1c4fdb3917.ngrok.io/login";
    const [data, setData] = useState({
        email: "",
        password: "",
    });

//login function with token and email store in localstorage
    const handleSubmit= (e)=>{
        // console.log(data);
        e.preventDefault()
       
        axios.post(url, {   
            email: data.email,
            password: data.password
        })
        .then(res => {
            // history.push(path);
            if (res.status==200)
            {
                console.log(res);
                localStorage.setItem('token', res['data'].accesstoken);
                localStorage.setItem('email', res['data'].email)
                let path = "/Record";
                history.push(path);
            }
            
        })
        // console.log(res);
        // localStorage.setItem("user",JSON.stringify(data));
    }
 
    return(
        <div>
            <h1>Login Here</h1> 
            <Link to={"./Signup"}><button style={{backgroundColor:"#3366FF"}}>Signup</button></Link>
            <Link to ={"./Forgetpass"}><button style={{backgroundColor:"#0099FF"}}>Forgotpass</button></Link><br/>
            <label>Email: </label>
            <input type="mail" value={data.email} name="email" placeholder="Email" onChange={(e)=>setData({...data, email: e.target.value})} /><br/>
            <label>Password</label>
            <input type="password" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} placeholder="password"></input><br/>
            
            <button onClick={handleSubmit} style={{backgroundColor:"#0099FF"}}>Login</button>
            
        {/* <Link to ={"./Record"}></Link> */}

        {/* <input type="text" placeholder="username"/><br/>
        <input type="password" placeholder="password"/><br/> */}
        
        {/* <Link to ={"./Record"}><button>Login</button></Link> */}
        </div>
    )
}
export default Login;