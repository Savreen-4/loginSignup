import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import Axios from 'axios';
import {API_URL} from "./Api";

const Signup = (props) => {
    const history = useHistory();
    const url = API_URL + `/auth/signup`;
    const [data, setData] = useState({
        fname: "",
        lname: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        password: "",
        cpassword: ""
    });

//signup api and data store in console and localstorage    
 const handleSubmit= ()=>{
     console.log(data);
     let path = "/";
     history.push(path);
     Axios.post(url, {
     fname: data.fname,
     lname: data.lname,
     age: data.age,
     gender: data.gender,
     phone: parseInt(data.phone),
     email: data.email,
     password: data.password,
     cpassword: data.cpassword
     })
     .then(res => {
        //  console.log(res.data);
         console.log(res);
     })
     
          if (data.Password === data.Confirm) {
            props.history.push("/Login");
          } else {
            alert("Password didn't match");
          }
     localStorage.setItem("user",JSON.stringify(data));
 }

    return (
        <div>
            <h1>Form</h1>
            <label>FirstName</label>
            <input type="text" value={data.fname} onChange={(e)=>setData({...data, fname:e.target.value})} placeholder="firstname"></input><br/>
            <label>LastName</label>
            <input type="text" value={data.lname} onChange={(e)=>setData({...data, lname:e.target.value})} placeholder="lastname"></input><br/>
           
            <label>Age: </label>
            
            <select name="age"  onChange={(e)=>setData({...data, age: e.target.value})} >
                <option value="5">Age </option>
                <option value="5">5 </option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="10">30</option>
                <option value="15">35</option>
                <option value="20">40</option>
                <option value="25">45</option>
                <option value="5">50</option>
                <option value="10">55</option>
                <option value="15">60</option>
                <option value="20">65</option>
                <option value="25">70</option>
            </select><br/>

            <label>Gender: </label>
            
            <input type="radio" value="male" name="gender" onChange={(e)=>setData({...data, gender: e.target.value})} />Male
            <input type="radio" value="female" name="gender" onChange={(e)=>setData({...data, gender: e.target.value})} />Female
            <br />
            <label>PhoneNumber:</label>
            <input type="text" name="phone" onChange={(e)=>setData({...data, phone: e.target.value})} />
            <br />
            <label>Email: </label>
            <input type="mail" value={data.email} name="email" onChange={(e)=>setData({...data, email: e.target.value})} /><br/>
            <label>Password</label>
            <input type="password" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} placeholder="password"></input><br/>
            <label>cnfrmpassword</label>
            <input type="password" value={data.cpassword} onChange={(e)=>setData({...data, cpassword:e.target.value})} placeholder="cnfrmpassword"></input>
           
        <br/>
    
           <Link to ={"./"}><button onClick={handleSubmit}>Submit</button></Link>
        </div>
    );
}

export default Signup;