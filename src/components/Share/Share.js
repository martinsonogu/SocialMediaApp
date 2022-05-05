import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import React from 'react';
import "./Share.css"

const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
          <div className="shareTop">
              <img src="https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" className="shareProfileImg" />
              <input type="text" className='shareInput' placeholder="whats's on your mind..." />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
              <div className="shareOptions">
                  <div className="shareOption">
                      <PermMedia htmlColor='tomato' className='shareIcon' />
                      <span className="shareOptionText">Photo or Video</span>
                  </div>
                  <div className="shareOption">
                      <Label htmlColor='blue' className='shareIcon' />
                      <span className="shareOptionText">Tag</span>
                  </div>
                  <div className="shareOption">
                      <Room htmlColor='green' className='shareIcon' />
                      <span className="shareOptionText">Location</span>
                  </div>
                  <div className="shareOption">
                      <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                      <span className="shareOptionText">Feelings</span>
                  </div>
              </div>
              <button className="shareButton">Share</button>
          </div>
      </div>
    </div>
  )
}

export default Share
