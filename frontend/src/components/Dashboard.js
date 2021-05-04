import react,{Component} from 'react';
import reactDom from 'react-dom';
import '../css/dash.css';
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card.js";
import hin from "../images/hindu.jpg";
import toi from "../images/toi.png";
import pat from "../images/patrika2.jpg";
import UserService,{USER_NAME_SESSION_ATTRIBUTE_NAME} from "../services/UserService";
import Notify from './Notify';

class Dashboard extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      currentPage:"Dashboard",
      companyName:"",
      description:"",
      Ad_date:"",
      adItems:null,
      userType:""
    }
    this.mySubmitHandler = this.mySubmitHandler.bind(this)
  }

  componentDidMount()
  {
    const user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    const type = user.userType;

    this.setState({userType:type});
    
    // setting user type

    const items = UserService.getAllAds().then((ad) =>
     {
       console.log(ad)
       const items = ad.map((item) => 
        <Notify companyName={item['companyName']} date={item['adDate']} status={item['status']} />
        )
        this.setState({adItems:items});
     }
    );
    
  }

  mySubmitHandler()
  {
    let user = JSON.parse(sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME));
    
    if(this.state.companyName.length>0 && this.state.description.length>0)
    {
      let ad = {companyName:this.state.companyName,userId:user['id'],desc:this.state.description,adDate:this.state.Ad_date,status:"Pending"};
      console.log(ad);
      UserService.createAd(ad);
      alert("Ad request sent successfully!"); 
    }
  }

  render()
  {
    this.myClickHandler=(event)=>
    {
      this.setState({currentPage:event.target.name})
    }

    this.myChangeHandler=(event)=>
    {
      let nam = event.target.name;
      let val = event.target.value;

      this.setState({[nam] : val});
    }

  return (
    this.state.userType === "Normal"?
    <div>
    <div class="sidebar">
      <a name="Dashboard" class={this.state.currentPage=="Dashboard"?"active":""} onClick={this.myClickHandler}>Home</a>
      <a name="Ad" class={this.state.currentPage=="Ad"?"active":""} onClick={this.myClickHandler} >Post an Ad</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>

    <div class="content">
      {
        this.state.currentPage==="Dashboard"?

        <div className="col-md-8 outer-div">
          <div className="row">
            <Card src={toi} alt={"times of india"} title={"TOI"} onClick={(e)=>this.handleClick(e)} />
            <Card src={pat} alt={"patrika"} title={"Patrika"} onClick={(e)=>this.handleClick(e)} />
            <Card src={hin} alt={"hindu"} title={"The Hindu"} onClick={(e)=>this.handleClick(e)} />
          </div>
        </div>
        :
          <div className="col-md-8 outer-div">
              <div className="row">
                  <div className="col-md-8">
                      <form className="form-group" onSubmit={this.mySubmitHandler} >
                          <h2 className="heading">Post an Advertisement!</h2><br/>
  
                          <select name="companyName" onChange={this.myChangeHandler} value={this.state.companyName} > 
                              <option value= "company name">Select Company</option>
                              <option value= "TOI">TOI</option>
                              <option value= "Patrika">Patrika</option>
                              <option value= "The Hindu">The Hindu</option>
                          </select><br/>
                          <hr/>
                          <label for="Ad_post_date">Select Date : </label>
                          <input type="date" name="Ad_date" onChange={this.myChangeHandler} placeholder="Ad post date" /><br/>
                          <hr/>
                          <textarea type="text" name="description" onChange={this.myChangeHandler} value={this.state.description} placeholder="Description" /><br/>
                          <input type="submit" name="submit" value="submit" className="btn btn-primary" />
                      </form>
                  </div>
              </div>
          </div>
      }
      <div className="outer-outer">
        <b><i>Notifications</i></b>
          {this.state.adItems}
      </div>

    </div>
    
    </div>
    :
    <div>
    <div class="sidebar">
      <a name="Dashboard" class={this.state.currentPage=="Dashboard"?"active":""} onClick={this.myClickHandler}>Home</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>

    <div class="content">
      {
        this.state.currentPage==="Dashboard"?

        <div className="col-md-8 outer-div">
          <div className="row">

          </div>
        </div>
        :
          <div className="col-md-8 outer-div">
              <div className="row">
                  <div className="col-md-8">
                      <form className="form-group" onSubmit={this.mySubmitHandler} >
                          <h2 className="heading">Post an Advertisement!</h2><br/>
  
                          <select name="companyName" onChange={this.myChangeHandler} value={this.state.companyName} > 
                              <option value= "company name">Select Company</option>
                              <option value= "TOI">TOI</option>
                              <option value= "Patrika">Patrika</option>
                              <option value= "The Hindu">The Hindu</option>
                          </select><br/>
                          <hr/>
                          <label for="Ad_post_date">Select Date : </label>
                          <input type="date" name="Ad_date" onChange={this.myChangeHandler} placeholder="Ad post date" /><br/>
                          <hr/>
                          <textarea type="text" name="description" onChange={this.myChangeHandler} value={this.state.description} placeholder="Description" /><br/>
                          <input type="submit" name="submit" value="submit" className="btn btn-primary" />
                      </form>
                  </div>
              </div>
          </div>
      }

    </div>
    
    </div>
  );
 }
}

export default Dashboard;