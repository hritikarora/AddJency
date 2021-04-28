import React, { Component } from "react";
import "../css/login.css"
import UserService from "../services/UserService"

export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            firstname:"",
            lastname:""

        }
    
        this.myChangeHandler=this.myChangeHandler.bind(this);
        this.mySubmitHandler=this.mySubmitHandler.bind(this);
     }
    myChangeHandler(event)
    {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val})
    }
    mySubmitHandler(event)
    {
        if(this.state.email.length>0 && this.state.password.length>0 && this.state.firstname.length>0 && this.state.lastname.length>0)
        {
            let user = {firstName:this.state.firstname,lastName:this.state.lastname,emailId:this.state.email,password:this.state.password};
            console.log(user);
            UserService.createUser(user);
            alert("Registration successful");
            
        }
        
    }

    render() {
        return (
            <div class="outer">
            <form onSubmit={this.mySubmitHandler}>
                <div className="Model">
                    <h2 className="tag">Register</h2>
                    
                    <input type="text" name="firstname" onChange={this.myChangeHandler} value={this.state.firstname} placeholder="First name" /><br/>
                    
                    <input type="text" name="lastname" onChange={this.myChangeHandler} value={this.state.lastname} placeholder="Last name" /><br/>
            
                    <input name="email" onChange={this.myChangeHandler} value={this.state.email} type="email" placeholder="Email" /><br/>
        
                    <input name="password" onChange={this.myChangeHandler} value={this.state.password} type="password" placeholder="Password" /><br/>
    
                    <input type="submit" value="Submit" className="bt" />
    
                    <p className="forgot-password">
                        Already registered <a href="#">log in?</a>
                    </p>
                </div>
            </form>
            </div>
            
        );
    }
}
