import React from 'react';
import "./Rightbar.css";
import {Users} from "../../dummydata";
import Online from '../Online/Online';

const Rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return (
      <>
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
      </>
    )
  }

    const ProfileRightBar =() => {
      return (
        <>
          <h4 className='rightbarTitle'>User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">Abuja</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">Lagos</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">Cheating</span>
            </div>
          </div>
          <h4 className='rightbarTitle'>User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="https://images.pexels.com/photos/2057152/pexels-photo-2057152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Kiesha Lesley</span>
            </div>
            <div className="rightbarFollowing">
              <img src="https://images.pexels.com/photos/2057152/pexels-photo-2057152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Kiesha Lesley</span>
            </div><div className="rightbarFollowing">
              <img src="https://images.pexels.com/photos/2057152/pexels-photo-2057152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Kiesha Lesley</span>
            </div><div className="rightbarFollowing">
              <img src="https://images.pexels.com/photos/2057152/pexels-photo-2057152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Kiesha Lesley</span>
            </div><div className="rightbarFollowing">
              <img src="https://images.pexels.com/photos/2057152/pexels-photo-2057152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Kiesha Lesley</span>
            </div><div className="rightbarFollowing">
              <img src="https://images.pexels.com/photos/2057152/pexels-photo-2057152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Kiesha Lesley</span>
            </div>
            
            
        
          </div>
        </>
      )
    }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile ? <ProfileRightBar/> :<HomeRightbar/> }
      </div>
    </div>
  )
}

export default Rightbar
