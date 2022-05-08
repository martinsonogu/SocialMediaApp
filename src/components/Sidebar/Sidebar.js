import "./Sidebar.css";
import React from 'react';
import {Users} from "../../dummydata";
import {Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from '@mui/icons-material/';
import CloseFriends from "../CloseFriends/CloseFriends";

const Sidebar = () => {
  

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarListIcon"/>
            <span className="sidebarListItemText">
              Feed
            </span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarListIcon"/>
            <span className="sidebarListItemText">
              Charts
            </span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarListIcon"/>
            <span className="sidebarListItemText">
              Videos
            </span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarListIcon"/>
            <span className="sidebarListItemText">
              Groups
            </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarListIcon"/>
            <span className="sidebarListItemText">
              Bookmarks
            </span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarListIcon"/>
            <span className="sidebarListItemText">
              Questions
            </span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarListIcon"/>
            <span className="sidebarListItemText">
              Jobs
            </span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarListIcon"/>
            <span className="sidebarListItemText">
              Events
            </span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarListIcon"/>
            <span className="sidebarListItemText">
              Courses
            </span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
         {Users.map((user) => (
           <CloseFriends key={user.id} user={user}/>
         ))}
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
