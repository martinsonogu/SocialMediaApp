import React from 'react';
import "./Profile.css";
import Topbar from '../../components/Topbar/Topbar';
import  Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";;


const Profile = () => {
  return (
    <div>
         <Topbar/>
      <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt="" className="profileCoverImg" />
                        <img src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                         alt="" className="profileUserImg" />
                    </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Igna Hussy</h4>
                    <span className="profileInfoDesc">Hello world!</span>
                </div>    
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Profile
