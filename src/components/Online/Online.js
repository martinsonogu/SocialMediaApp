import React from 'react';
import "./Online.css";

const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={user.ProfilePicture} 
              alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}

export default Online
