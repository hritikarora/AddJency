import React, {useState,useEffect,navigation } from "react";
import "../css/login.css";
import axios from '../../node_modules/axios';
import { useHistory,withRouter} from "react-router-dom";

function LoginPage(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");    

    const history = useHistory();

    const handleSubmit = async () => {

        const USER_API_BASE_URL = "http://localhost:8084/api/v1/users";
      
        const response = await axios.get(USER_API_BASE_URL + '/' + email);
      
        console.log(response);
        console.log(response.data);
        let res = response.data;
        if(res.password == password)
        {
            alert("login success!");
            setEmail("")
            setPassword("")
            history.push("/signup");
        }
        else{
            alert("Incorrect credentials!")

        }
      };

    return (
        <div class="outer">
         <form onSubmit={handleSubmit}>
            <div className="Model">
                <h2 className="tag">Login</h2>
                    
                <input name="email" type="email" value={email} onChange={(Event)=>{setEmail(Event.target.value)}} placeholder="Email" /><br/>
                 
                <input name="password" type="password" value={password} onChange={(Event)=>{setPassword(Event.target.value)}} placeholder="Password" /><br/>
                   
                <input type="submit" value="submit" className="bt" />
                    
                <p style={{color:"whitesmoke"}} className="forgot-password">
                    Forgot <a href="#">password?</a>
                </p>
            </div>
        </form>
       </div>
    );
}
export default withRouter(LoginPage);