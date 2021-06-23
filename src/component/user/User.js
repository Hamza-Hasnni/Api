import React from "react";
import "./UserStyle.css";

const User = ({ user }) => {
  return (
    <div className="container">
  <div className="card">
    <div className="imgBx">
      <img src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"/>
    </div>
    <div className="contentBx">
      <h2>{user.name}</h2>
      <h4 style={{marginTop:"2px",color:"white"}}>{user.username}</h4>
      <div style={{marginTop:"-2px"}} className="size" >
        <h3>E-mail :</h3>
        <span>{user.email}</span>
      </div>
      <div style={{marginLeft:"2px"}} className="color">
        <h3>Phone :</h3>
        <span style={{color:"white",background:"none",fontSize:"12px"}}>{user.phone.split('-').join('.')}</span>
        
        
      </div>
      <a href="#">Contact</a>
    </div>
  </div>
</div>
  );
};

export default User;
