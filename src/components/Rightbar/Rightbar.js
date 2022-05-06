import React from 'react';
import "./Rightbar.css";
import {Users} from "../../dummydata"
import Online from '../Online/Online';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="https://e7.pngegg.com/pngimages/701/109/png-clipart-celebrate-celebrate-float.png"
           alt="" className='birthdayImg' />
          <span className="birthdayText">
            <b>Idu Ene</b>  and <b>7 other friends </b> have birthday today
          </span>
        </div>
        <img src="https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id}/>
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
