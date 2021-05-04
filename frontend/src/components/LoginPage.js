import React, {useState} from "react";
import "../css/login.css";
import { useHistory} from "react-router-dom";
import UserService, { USER_NAME_SESSION_ATTRIBUTE_NAME } from "../services/UserService";

function LoginPage(props){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");    

    const history = useHistory();

    const handleSubmit = () => {

        if(UserService.validateUser(email,password))
        {
            alert("login success !");
            history.push("/dashboard");
        }
        else{
            alert("incorrect credentials")
        }
      };

    return (
        <div className="outer">
         <form onSubmit={handleSubmit} >
            <div className="Model-in">
                <h2 className="tag">Log In!</h2>
                    
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
export default LoginPage;