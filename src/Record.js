import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from "./Api";

function Record (props){
   // const url = API_URL  + `profile`;
   const [data, setData] = useState([]);
   const history=useHistory()

   let tok = localStorage.getItem('token');
   let email= localStorage.getItem('email');

   const handleSubmit =()=>{
       axios.get(API_URL + `/profile/showprofile`,{
      headers: {
     accesstoken : tok,
     email: email
       }
   })
   .then(res=>{
       setData(res['data'].result)
       console.log(data);
   })
   }

   const logout = ()=>{
       axios.post(API_URL + `/auth/logout`, data,{
           headers: {
          accesstoken : tok ,
          email: email
            }
        })
        .then(res=>{
            if(res.status==200){
                localStorage.clear();
            }
            console.log(res);
        })
        let path = "/";
               history.push(path);
   }

   return(
       <div style={{alignItems:'center',justifyContent:'center'}}>
           <h1>Record Profile</h1>
           <button onClick={handleSubmit}>Profile</button>
           {
               data.map((value,index)=>{
                   return(
                       <div key={index}>
                         <h2> {value.firstname}
                           {value.lastname}</h2> <br/>
                           <h2>{value.gender}</h2><br/>
                          <h2> {value.phone}</h2><br/>
                          <h2> {value.email}</h2>
                           </div>
                   )
               })
           }
           
           <button onClick={logout}>Logout</button>
           <Link to ={"./"}><button>back</button></Link>
       </div>
   )
}
export default Record;






// import React,{useState} from 'react';
// import {Link,useHistory} from 'react-router-dom';
// import axios from 'axios';
// import {API_URL} from "./Api";

// function Record (props){
//     // const url = API_URL  + `profile`;
//     const [data, setData] = useState([]);
//     const history=useHistory()

//     let tok = localStorage.getItem('token');
//     let email= localStorage.getItem('email');

//     const profile =()=>{
//         axios.get(API_URL + `/profile`,{
//        headers: {
//       accesstoken : tok ,
//       email: email
//         } 
//     })
//     .then(res=>{
//         setData(res['data'].data)
//         console.log(data);
//     })
//     }

//     const logout = ()=>{
//         axios.post(API_URL + `/logout`, data,{
//             headers: {
//            accesstoken : tok ,
//            email: email
//              } 
//          })
//          .then(res=>{
//              if(res.status==200){
//                  localStorage.clear();
//              }
//              console.log(res);
//          })
//          let path = "/";
//                 history.push(path);
//     }

//     return(
//         <div style={{alignItems:'center',justifyContent:'center'}}>
//             <h1>Record Profile</h1>
//             <button onClick={profile} style={{color:"blue"}}>Profile</button>
           
//             {/* {
//                 data.map((value,index)=>{
//                     return(
//                           <div key={index}>
//                            <h2>{value.firstname}
//                             {value.lastname}</h2> <br/>
//                             <h2>{value.gender}</h2><br/>
//                            <h2> {value.phone}</h2><br/>
//                            <h2> {value.email}</h2>
//                             </div>
//                     )
//                 })
//             }
//              */}
//             <button onClick={logout}>Logout</button>
//             {/* <Link to ={"./"}><button>back</button></Link> */}
//         </div>
//     )
// }
// export default Record;