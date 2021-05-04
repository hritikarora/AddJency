import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Nav,Navbar,Form,FormControl, NavLink} from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Head extends Component{

render(){
    return (
      <Navbar  style={{backgroundColor:"#242424"}} >
        <Navbar.Brand style={{marginLeft:"100px",fontSize:"30px"}}><Link style={{textDecoration:"none",color:"white"}} to="/"><i style={{padding:"10px"}} className="fa fa-cube"/>AddJency</Link></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white",margin:"5px"}} >Services</NavLink>
                <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white",margin:"5px"}} >Contact</NavLink>
                <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white",margin:"5px"}} >About</NavLink>
            </Nav>
            <Form inline >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <i className="fa fa-search" style={{color:"white"}}/>
            </Form>
            <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white",margin:"5px"}} ><Link to="/" >Sign In</Link></NavLink>
            <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white",margin:"5px"}} ><Link to="/signup" >Sign Up</Link></NavLink>
      </Navbar.Collapse>
    </Navbar>);
   }
}