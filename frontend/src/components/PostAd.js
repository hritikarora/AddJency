// import React, { Component, useState } from 'react';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../css/ad.css";

// function PostAd(props)
// {

//     const [companyName,setCompanyName] = useState("");

//     function myChangeHandler(event)
//     {
//         let val = event.target.value;
//         setCompanyName(val);
//     }

//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-8">
//                     <form className="form-group">
//                         <h2 className="tag">Post an Advertisement!</h2><br/>

//                         <select name="companyName" onChange={myChangeHandler} value={companyName} > 
//                             <option value= "company name">Select Company</option>
//                         </select><br/>
//                         <hr/>
//                         <label for="Ad_post_date">Select Date : </label>
//                         <input type="date" name="Ad_post_date" placeholder="Ad post date" /><br/>
//                         <hr/>
//                         <textarea type="text" name="Description" placeholder="Description" /><br/>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// } 

// export default PostAd;