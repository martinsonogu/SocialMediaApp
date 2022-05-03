import React from 'react';
import "./Topbar.css";
import {Search, Person, Chat, Notifications} from '@mui/icons-material/';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
          <span className="logo">Connect</span>
      </div>
      <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input type="text" className='searchInput' placeholder='Search' />
          </div>
      </div>
      <div className="topbarRight">
          <div className="topbarLinks">
              <span className="topbarLink">HomePage</span>
              <span className="topbarLink">TimeLine</span>
          </div>
          <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
              </div>
          </div>
          <img src="" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar