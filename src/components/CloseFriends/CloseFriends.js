import React from 'react';
import "./CloseFriends.css"

const CloseFriends = ({user}) => {
  return (
    <li className="sidebarFriend">
    <img src={user.ProfilePicture} alt="" 
    className="sidebarFriendImg" />
    <span className="sidebarFriendName">{user.username}</span>
  </li>
  )
}

export default CloseFriends
