import React from 'react';
import './UserUpdate.css';
import man from "../../Assests/man.png";


const UserUpdate = () => {

    return (
        <profile>
         <h1 className="font-bold text-title" >User Profile</h1>    
        <div className="profile__cards">
         <div className="card_user">
           <div className="card_profile">
           <img src={man} alt="Avatar" width="100"/>
             <h1>Shyam Lakhani</h1>
          <span className="card_desig">Software Frontend Developer</span>
           <h2>Description</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, 
           commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</p>
            </div>
          </div>
       

          {/*starts form  */}
       
          <div className="card_form">
          <div className="card_inside">
           <form className="form" id="form">
           <h3>Account Details</h3>
           
           <div className="form-control">
                <input type="" name="" id="name" placeholder="Enter your Name" autocomplete="off" />
                <br />
                <input type="" name="" id="name" placeholder="Enter Address" autocomplete="off"/>
                <br />
                <input type="" name="" id="name" placeholder="City" autocomplete="off"/>
                <br />
                <input type="number" name="" id="zip code" placeholder="zip code" autocomplete="off" />
                <br />
                <input type="number" name="" id="phoneNumber" placeholder="Enter your Phone Number" autocomplete="off"/>
                <br />
                <input type="email" name="" id="email" placeholder="Enter your Email" autocomplete="off"/>
                <br />
                <input type="password" name="" id="password" placeholder="Enter your Password" />
                <br />  
                <textarea type="text" placeholder="Add Description" autocomplete="off"/>
                <button type="submit" className="btn" name="" >Update Account</button>
           </div>
                 </form>
                </div>
            </div>
            </div>
         </profile>
    );

}

export default UserUpdate;

    