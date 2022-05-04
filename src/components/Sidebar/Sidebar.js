import "./Sidebar.css";
import React from 'react';
import {Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from '@mui/icons-material/';

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
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
            className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/1205405/pexels-photo-1205405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
            className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/1205405/pexels-photo-1205405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
            className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/1205405/pexels-photo-1205405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
            className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/1205405/pexels-photo-1205405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">
              Monroe Philips
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
